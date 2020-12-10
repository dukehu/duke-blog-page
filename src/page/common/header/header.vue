<!-- 页头 -->
<template>
    <div>
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
                    <a class="navbar-brand visible-xs" @click="goPage('/')">Duke`s Blog</a>
                </div>
                <div class="collapse navbar-collapse" id="example-navbar-collapse">
                    <ul class="nav navbar-nav" style="display: inline-block;float: none;">
                        <li @click="goPage(navbar.router)" style="cursor:pointer"
                            v-for="navbar in navbars" :key="navbar.id">
                            <a><i :class="navbar.icon"></i>&nbsp;{{navbar.name}}</a>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-right visible-lg visible-md" role="login">
                        <a v-if="loginStatus === 0" type="submit"
                            class="btn btn-default"
                            style="border-radius: 20px;border: 0;"
                            @click="toLogin">
                            <i class="fa fa-sign-in fa-lg"></i>
                            登陆
                        </a>
                        <el-dropdown split-button size="small" trigger="click">
                          Duke
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user" @click.native="toProfile">个人中心</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-setting" @click.native="toFileManager">个人设置</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-edit" @click.native="edit">写文章</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-files" @click.native="toFileManager">文件管理</el-dropdown-item>
                            <el-dropdown-item @click.native="logout" divided>退出登陆</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </form>
                </div>
                <a href="https://github.com/dukehu" target="_blank">
                    <img style="position: absolute; top: 0; left: 0; border: 0;"
                        src="@/imgs/forkme_left_darkblue_121621.png"
                        alt="Fork me on GitHub">
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      navbars: [
        {id: 'index', name: '首页', icon: 'fa fa-home fa-lg', router: '/'},
        {id: 'categories', name: '分类', icon: 'fa fa-list fa-lg', router: '/categories'},
        {id: 'about', name: '关于我', icon: 'fa fa-user fa-lg', router: '/about'},
        {id: 'archives', name: '归档', icon: 'fa fa-archive fa-lg', router: '/archives'},
        {id: 'tags', name: '标签', icon: 'fa fa-tags fa-lg', router: '/tags'}
      ],
      loginStatus: 1
    }
  },
  methods: {
    // 个人中心
    toProfile () {
      this.$router.push('/profile')
    },
    // 推出登陆
    logout () {

    },
    // 文件管理
    toFileManager () {
      this.$router.push('/file')
    },
    // 文章管理
    toArticleManager () {},
    edit () {
      this.$router.push('/edit')
    },
    goPage (router) {
      this.$router.push(router)
    },
    toLogin () {
      this.$router.push('/login')
    },
    toManage () {
      this.$router.push('/manager')
    }
  }
}
</script>

<style scoped>
.navbar{
    background: #f8f8f8;
    text-align: center;
    font-size: 16px;
    position: fixed;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
