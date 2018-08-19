<template>
    <div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid"> 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#" @click="goHome()">D-BLOG</a>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active" @click="goHome()"><a href="#">首页</a></li>
                        <li><a href="#">关于我</a></li>
                    </ul>
                    <form class="navbar-form navbar-right" role="login">
                        <button type="submit" @click="toLogin" class="btn btn-default">登陆</button>
                        <button type="submit" class="btn btn-default">发布博客</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push("/");
        },
        toLogin() {
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
.navbar{
    background: #343a40;
} 
</style>