<template>
    <div class="col-md-8 col-sm-3">
        <div style="text-align:left">
            <div v-for="article in pageInfo.list" v-bind:key="article.id" class="panel panel-default">
                <div style="cursor:pointer" :title="article.title" class="panel-heading" @click="detail(article.id)">{{article.title}}</div>
                <div class="panel-body">
                    {{article.summary}}
                </div>
                <div class="panel-footer">
                    <span class="glyphicon glyphicon-time"></span> 
                    {{article.publishDate}} &nbsp;&nbsp;
                    <span v-show="article.labelVMS" class="glyphicon glyphicon-tags"></span> 
                    <a style="cursor: pointer; text-decoration: none" v-for="label in article.labelVMS" :key="label.id">{{label.name}} &nbsp;&nbsp;</a>
                    <span class="glyphicon glyphicon-eye-open"></span>
                    {{article.articleViews}}次浏览
                </div>
            </div>
            <ul class="pager">
                <li style="cursor:pointer" class="previous" :class="pageInfo.hasPreviousPage ? '' : 'disabled'" @click="previous"><a>&larr; Previous</a></li>
                <li style="cursor:pointer" class="next" :class="pageInfo.hasNextPage ? '' : 'disabled'" @click="next"><a>Next &rarr;</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageInfo: {},
            pageSize:10,
            currentPage:1,
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
            })
        },
        detail(id) {
            // 去详情页，也就是跳转一个路由
            this.$router.push({
                path: `/detail/${id}`,
            })
        },
        previous() {
            if(this.currentPage === 1) {
                return;
            }
            this.currentPage = this.currentPage - 1;
            this.getList();
        },
        next() {
            if(this.currentPage === this.pageInfo.pages) {
                return;
            }
            this.currentPage = this.currentPage + 1;
            this.getList();
        }
    }
}
</script>

<style scoped>
.panel-body{
    padding: 25px 15px;
}
</style>