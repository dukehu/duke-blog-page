<template>
    <div>
        <div class="panel panel-default">
            <!-- 博客详情开始 -->
            <div class="panel-heading" style="padding: 15px 0 20px 0;">
                <h2>
                    {{article.title}}
                    <a style="cursor: pointer; text-decoration: none; font-size:12px;" 
                        title="点击下载PDF"
                        @click="download(article.id)">
                        下载
                    </a>
                </h2>
                
                <div style="font-size:12px;text-align:center;color:grey">
                    <span style="display:inline-block;">
                        <span class="fa fa-clock-o fa-lg"></span> 
                        {{article.publishDate}} &nbsp;&nbsp;
                    </span>
                    <span v-show="article.typeVMS" style="display:inline-block;">
                        <span class="fa fa-folder-open-o fa-lg"></span> 
                        <a style="cursor: pointer; text-decoration: none" @click="queryByCategory(type.name)"
                            v-for="type in article.typeVMS" :key="type.id">{{type.name}} &nbsp;&nbsp;</a>
                    </span>
                    <span v-show="article.labelVMS" style="display:inline-block;">
                        <span class="fa fa-tags fa-lg"></span> 
                        <a style="cursor: pointer; text-decoration: none"  @click="queryByTag(label.name)"
                            v-for="label in article.labelVMS" :key="label.id">{{label.name}} &nbsp;&nbsp;</a>
                    </span>
                </div>
            </div>
            <div class="panel-body" v-html="article.htmlContent">
                <div style="text-align:center;">
                    <img style="width:150px;" src="../../imgs/loading.gif"/>加载中....
                </div>
            </div>
            <div class="panel-footer">
                <a class="btn btn-default" v-show="article.previousArticle"
                    style="border-radius: 20px;border: 0;" 
                    @click="anotherArticleDetail(article.previousArticle.labelVMS, article.previousArticle.id)">
                    <i class="fa fa-chevron-left fa-lg"></i>
                    上一篇
                </a>
                <a class="btn btn-default" v-show="!article.previousArticle"
                    style="border-radius: 20px;border: 0;" disabled title="没有上一篇啦">
                    <i class="fa fa-chevron-left fa-lg"></i>
                    上一篇
                </a>
                <a class="btn btn-default" v-show="article.nextArticle"
                    style="border-radius: 20px;border: 0;float:right" 
                    @click="anotherArticleDetail(article.nextArticle.labelVMS, article.nextArticle.id)">
                    下一篇
                    <i class="fa fa-chevron-right fa-lg"></i>
                </a>
                <a class="btn btn-default" v-show="!article.nextArticle"
                    style="border-radius: 20px;border: 0;float:right" disabled title="没有下一篇啦">
                    下一篇
                    <i class="fa fa-chevron-right fa-lg"></i>
                </a>
            </div> 
            <!-- 博客详情结束 -->
            <back-top></back-top>
        </div>

        <!-- <comment :comments="comments"></comment> -->
    </div>
</template>

<script>
import backTop from '../../components/backTop.vue';
import comment from '../comment/index.vue';
export default {
    components: {backTop, comment},
    data() {
        return{
            navigationShow: true,
            title: '',
            content: ``,
            comments: [
                {id: 'comment_1', userId: '1', userName: 'duke', commentDate: '2017-01-01', content: '121212121212121', avatar: '', children: [
                    {id: 'comment_2', userId: '2', userName: '张三', commentDate: '2017-01-03', content: '3213212121', avatar: ''},
                    {id: 'comment_3', userId: '3', userName: '李四', commentDate: '2017-01-04', content: '321312312312312312', avatar: ''},
                    {id: 'comment_4', userId: '4', userName: '王五', commentDate: '2017-01-03', content: '恶趣味请问汽车', avatar: ''},
                    {id: 'comment_5', userId: '5', userName: '二愣子', commentDate: '2017-01-02', content: '恶趣味驱蚊器委屈委屈问问去', avatar: ''},
                ]}
            ],
            article: {}
        }
    },
    methods: {
        download(id) {
            let formDom = document.createElement('form');
            formDom.method = 'post';
            formDom.style.display = 'none';
            formDom.action = 'http://dukehu.top:9000/api/blog/nologin/blog_article/download/pdf/' + id;
            document.body.appendChild(formDom);
            formDom.submit();
            console.log(formDom);
            setTimeout(() => {
                document.body.removeChild(formDom)
            }, 500)
        },
        anotherArticleDetail(labels, id) {
            // 去详情页，也就是跳转一个路由
            let lable = 'duke';
            if(labels) {
                lable = labels[0].name;
            }
            this.$router.push({
                path: `/articles/${lable}/${id}`,
            })
        },
        queryByTag(tag) {
            this.$router.push("/tags/" + tag);
        },
        queryByCategory(category) {
            this.$router.push("/categories/" + category);
        },
        hideNavigation() {
            this.navigationShow = false;
        },
        showNavigation() {
            this.navigationShow = true;
        },
        getArticles() {
            this.$axios('get','/api/blog/nologin/blog_article/' + this.$route.params.id).then(data => {
                this.article = data.data;
            })
        }
    },
    created(){
      this.getArticles();
    },
    watch: {
        '$route': 'getArticles'
    }
}
</script>

<style scoped>
.panel-body >>> img{
    display: inline-block;
    height: auto;
    max-width: 100%;
}
.panel-body >>> p{
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
}
</style>