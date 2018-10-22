<template>
    <div>
        <div v-for="article in pageInfo.list" v-bind:key="article.id" class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.6em; cursor:pointer" @click="detail(article.labelVMS, article.id)">
                    <a style="text-decoration: none;">{{article.title}}</a>
                </h1>
                <p style="color:grey;">
                    {{article.summary}}
                </p>
            </div>
            <div class="panel-footer" style="height:auto;width:100%;overflow: hidden;">
                <div style="float:left;width:80%;">
                    <span style="display:inline-block;">
                        <span class="fa fa-clock-o fa-lg"></span> 
                        {{article.publishDate}} &nbsp;&nbsp;
                    </span>
                     <span style="display:inline-block;">
                        <span v-show="article.typeVMS" class="fa fa-folder-open-o fa-lg"></span> 
                        <a style="cursor: pointer; text-decoration: none" @click="queryByCategory(type.name)"
                            v-for="type in article.typeVMS" :key="type.id">{{type.name}} &nbsp;&nbsp;</a>
                    </span>
                    <span style="display:inline-block;">
                        <span v-show="article.labelVMS" class="fa fa-tags fa-lg"></span> 
                        <a style="cursor: pointer; text-decoration: none" @click="queryByTag(label.name)"
                            v-for="label in article.labelVMS" :key="label.id">{{label.name}} &nbsp;&nbsp;</a>
                    </span>
                    <span style="display:inline-block;">
                        <span class="fa fa-eye fa-lg"></span>
                        {{article.articleViews}}次浏览
                    </span>
                </div>

                <button style="float:right;" 
                    type="button" 
                    class="btn btn-primary"  
                    @click="detail(article.labelVMS, article.id)">阅读全文</button>
            </div>
        </div>
        <ul class="pager" style="font-size: 18px;">
            <li><a>&laquo;</a></li>
            <li v-for="num in pageInfo.navigatepageNums" 
                :key="num"
                @click="jumpPage(num)">
                <a :class="{'active' : num==currentPage}">{{num}}</a>
            </li>
            <li><a>&raquo;</a></li>
        </ul>
        <back-top></back-top>
    </div>
</template>

<script>
import backTop from '../../backTop.vue';
export default {
    components: {backTop},
    data(){
        return{
            pageInfo: {},
            pageSize: 10,
            currentPage: 1,
            isActive: true,
            tag: '',
            category: '',
        }
    },
    methods:{
        queryByTag(tag) {
            this.$router.push("/tags/" + tag);
        },
        queryByCategory(category) {
            this.$router.push("/categories/" + category);
        },
        getList(){
            this.$axios('get','/api/blog/nologin/blog_article',{
                type: this.category,
                tag: this.tag,
                page: this.currentPage,
                size: this.pageSize,
            }).then(data => {
                this.pageInfo = data.data;
            })
        },
        detail(labels, id) {
            // 去详情页，也就是跳转一个路由
            let lable = 'duke';
            if(labels) {
                lable = labels[0].name;
            }
            this.$router.push({
                path: `/articles/${lable}/${id}`,
            })
        },
        jumpPage(num) {
            this.currentPage = num;
            this.getList();
        }
    },
    created() {
        this.getList();
    },
    watch: {
        $route: {
            handler: function(newVal, oldVal){
                this.tag = '';
                this.category ='';
                let regTag = new RegExp("^/tags");
                let regCategory = new RegExp("^/categories");
                if(regTag.test(newVal.path)) {
                    this.tag = this.$route.params.tag;
                }
                if(regCategory.test(newVal.path)) {
                    this.category = this.$route.params.category;
                }
                this.getList();
            },
            // 深度观察监听
            deep: true
        }
    }
}
</script>

<style scoped>
ul li a {
    margin-right: 10px;
    cursor: pointer;
    border-radius: 4px;
    color: #666;
}
.active {
    background-color: #29afec;
}
</style>