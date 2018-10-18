<template>
    <div v-show="!isLogin">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background:white;">
            <div class="container-fluid"> 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- <a class="navbar-brand visible-xs" @click="goPage('/')">Duke`s Blog</a> -->
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav" style="display: inline-block;float: none;">
                        <li @click="goPage(navbar.router)" style="cursor:pointer" 
                            v-for="navbar in navbars" :key="navbar.id">
                            <a><span :class="navbar.icon"></span>&nbsp;{{navbar.name}}</a>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-right visible-lg visible-md" role="login">
                        <!-- <a class="dropdown-toggle" data-toggle="dropdown" href="#" >
                            <img src="../../imgs/user.png"  
                                style="width:35px; border: 1px solid seagreen;border-radius: 20px;"/>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a style="cursor: pointer;" @click="toManage">
                                    <i class="fa fa-cog fa-lg" style="padding-right:15px;"></i>后台管理
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li><a style="cursor: pointer;"><i class="fa fa-sign-out fa-lg" style="padding-right:15px;"></i>退出</a></li>
                        </ul> -->
                        <a type="submit" 
                            class="btn btn-default" 
                            style="border-radius: 20px;border: 0;"
                            @click="toLogin">
                            <i class="fa fa-sign-in fa-lg"></i>
                            登陆
                        </a>
                        <a type="submit" 
                            class="btn btn-default" 
                            style="border-radius: 20px;border: 0;"
                            @click="edit">
                            <i class="fa fa-paint-brush fa-lg"></i>
                            写文章
                        </a>
                    </form>
                </div>
                <a href="https://github.com/dukehu" target="_blank">
                    <img style="position: absolute; top: 0; left: 0; border: 0;" 
                        src="../../../src/imgs/forkme_left_darkblue_121621.png"
                        alt="Fork me on GitHub">
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            navbars: [
                {id: 'index', name: '首页', icon: 'fa fa-home fa-lg', router: '/'},
                {id: 'categories', name: '分类', icon: 'fa fa-list fa-lg', router: '/categories'}, 
                {id: 'about', name: '关于我', icon: 'fa fa-user fa-lg', router: '/about'}, 
                {id: 'archives', name: '归档', icon: 'fa fa-archive fa-lg', router: '/archives'},
                {id: 'tags', name: '标签', icon: 'fa fa-tags fa-lg', router: '/tags'},
            ]
        }
    },
    methods: {
        edit() {
            this.$router.push("/edit");
        },
        goPage(router) {
            this.$router.push(router);
        },
        toLogin() {
            this.$router.push("/login");
        },
        toManage() {
            this.$router.push("/manager");
        }
    }
}
</script>

<style scoped>
.navbar{
    background: #f8f8f8;
    text-align: center;
    font-size: 16px;
}
</style>