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
            <div class="panel-footer" style="height:auto;width:100%;">
                <span class="fa fa-clock-o fa-lg"></span> 
                {{article.publishDate}} &nbsp;&nbsp;
                <span v-show="article.labelVMS" class="fa fa-tags fa-lg"></span> 
                <a style="cursor: pointer; text-decoration: none" v-for="label in article.labelVMS" :key="label.id">{{label.name}} &nbsp;&nbsp;</a>
                <span class="fa fa-eye fa-lg"></span>
                {{article.articleViews}}次浏览

                <!-- <button style="float:right;" 
                    type="button" 
                    class="btn btn-primary"  
                    @click="detail(article.labelVMS, article.id)">阅读全文</button> -->
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
            isActive: true
        }
    },
    created() {
        this.getList();
    },
    methods:{
        getList(){
            this.$axios('get','/api/blog/nologin/blog_article',{
                page:this.currentPage,
                size:this.pageSize,
            }).then(data => {
                this.pageInfo = data.data;
                console.log(this.pageInfo);
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