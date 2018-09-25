<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background:white">
            <div class="container-fluid"> 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- <a class="navbar-brand" href="#" @click="goPage('/')">D-BLOG</a> -->
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav" style="display: inline-block;float: none;">
                        <li  @click="goPage(navbar.router)" style="cursor:pointer" 
                            v-for="navbar in navbars" :key="navbar.id">
                            <a><span :class="navbar.icon"></span>&nbsp;{{navbar.name}}</a>
                        </li>
                    </ul>
                    <!-- <form class="navbar-form navbar-right" role="login">
                        <button type="submit" @click="toLogin" class="btn btn-default">登陆</button>
                        <button type="submit" class="btn btn-default">发布博客</button>
                    </form> -->
                </div>
                <a href="https://github.com/dukehu" target="_blank">
                        <img style="position: absolute; top: 0; left: 0; border: 0;" 
                            src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"
                            alt="Fork me on GitHub">
                    </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbars: [
                {id: 'index', name: '首页', icon: 'glyphicon glyphicon-home', router: '/'},
                {id: 'archives', name: '归档', icon: 'glyphicon glyphicon-folder-open', router: '/tags'},
                {id: 'tags', name: '标签', icon: 'glyphicon glyphicon-tags', router: '/labels'},
                {id: 'about', name: '关于我', icon: 'glyphicon glyphicon-user', router: '/about'}, 
            ]
        }
    },
    methods: {
        goPage(router) {
            this.$router.push(router);
        },
        toLogin() {
            this.$router.push("/login");
        },
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