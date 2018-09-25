<template>
    <div>
        <div class="panel panel-default">
            <!-- 博客详情开始 -->
            <div class="panel-heading">{{title}}</div>
            <div class="panel-body" v-html="content">
                这是一个基本的面板
            </div>
            <div class="panel-footer">
                <a class="btn btn-info btn-sm">
                    <span class="glyphicon glyphicon-chevron-left"></span> 上一篇
                </a>
                <a class="btn btn-info btn-sm" style="float:right">
                    下一篇 <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div> 
            <!-- 博客详情结束 -->
            <back-top></back-top>
        </div>

        <comment :comments="comments"></comment>
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
            ]
        }
    },
    methods: {
        hideNavigation() {
            this.navigationShow = false;
        },
        showNavigation() {
            this.navigationShow = true;
        },
        getArticles() {
            this.$axios('get','/api/blog/nologin/blog_article/' + this.$route.params.id).then(data => {
                this.title = data.data.title;
                this.content = data.data.htmlContent;
                this.time = data.data.publishDate;
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
.panel-default > .panel-heading {
    background-color: white;
    text-align: center;
    font-size: 2.6em;
}
.panel {
    border: 0;
}
</style>