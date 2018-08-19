<template>
    <div class="col-md-8 col-sm-3">
        <div style="text-align:left">
            <div v-for="article in articles" v-bind:key="article.id" class="panel panel-default">
                <div class="panel-heading" @click="detail(article.id)">{{article.title}}</div>
                <div class="panel-body">
                    {{article.summary}}
                </div>
                <div class="panel-footer">
                    <span class="glyphicon glyphicon-time"></span> {{article.publishDate}}
                    <span class="glyphicon glyphicon-tags"></span> idea jreble
                    <span class="glyphicon glyphicon-eye-open"></span> 4276次浏览
                </div>
            </div>
            <ul class="pager">
                <li class="previous"><a href="#">&larr; Previous</a></li>
                <li class="next"><a href="#">Next &rarr;</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            articles: [],
            blogTotal:0,
            pageSize:20,
            currentPage:1,
        }
    },
    created() {
        this.getList();
        console.log(this.articles)
    },
    methods:{
        getList(){
            this.$axios('get','/api/blog/nologin/blog_article',{
                page:this.currentPage,
                size:this.pageSize,
            }).then(data => {
                console.log("!!!!!!!!!!!!!!!" + data.data.list)
                this.articles = data.data.list;
                this.blogTotal = data.data.total;
            })
        },
        detail(id) {
            // 去详情页，也就是跳转一个路由
            console.log("@@@@@@@@@@" + id);
            this.$router.push({
                path: `/detail/${id}`,
            })
        }
    }
}
</script>

<style scoped>
.panel-body{
    padding: 25px 15px;
}
</style>