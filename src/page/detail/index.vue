<template>
    <div class="row" style="text-align:left;">
        <!-- 导航目录开始 -->
        <div class="col-md-3 col-sm-3 v-note-wrapper markdown-body" style="padding:0px;z-index:0;" v-show="navigationShow">
            <div class="v-note-panel shadow">
                <div class="v-note-navigation-wrapper shadow" style="width:100%">
                    <div class="v-note-navigation-title">
                    导航目录<i class="fa fa-mavon-times v-note-navigation-close"
                                aria-hidden="true" @click="hideNavigation"></i>
                    </div>
                    <div class="v-note-navigation-content scroll-style" v-html="navigation"></div>
                </div>
            </div>
        </div>
        <div class="col-md-1 col-sm-3" v-show="!navigationShow">
            <span class="glyphicon glyphicon-align-left" style="cursor:pointer;" @click="showNavigation"></span>
        </div>
        <!-- 导航目录结束 -->
        <!-- 博客详情开始 -->
        <div class="panel panel-default col-sm-3 markdown-body" :class="navigationShow ? 'col-md-8' : 'col-md-10'" style="padding:0px;">
            <div class="panel-heading">{{title}}</div>
            <div class="panel-body" v-html="content">
                这是一个基本的面板
            </div>
            <div class="panel-footer">面板脚注</div>
        </div>
        <!-- 博客详情结束 -->
    </div>
</template>

<script>
export default {
    data() {
        return{
            navigationShow: true,
            title: '',
            navigation: '',
            content: ``
        }
    },
    methods: {
        hideNavigation() {
            this.navigationShow = false;
        },
        showNavigation() {
            this.navigationShow = true;
        }
    },
    created(){
      this.$axios('get','/api/blog/nologin/blog_article/' + this.$route.params.id).then(data => {
        this.title = data.data.title;
        this.content = data.data.htmlContent;
        this.time = data.data.publishDate;
        this.navigation = data.data.navigation;
        if(!this.navigation) {
            this.navigationShow = false;
        }
      })
    }
}
</script>

<style scoped>
.panel-body >>> img{
    display: inline-block;
    height: auto;
    max-width: 100%;
}
</style>