<template>
  <div id="app">
    <!-- 页面的header部分 -->
    <header-page id="headerPage" v-show="needHeader"></header-page>
    <div class="container" v-show="!isManage">
      <body-page v-if="!isManage && !isFile" :need-left="needLeft">
          <router-view name="front"/>
      </body-page>
      <manage-page v-if="isManage && !isFile">
          <router-view name="manager"/>
      </manage-page>
      <file v-if="isFile"></file>
    </div>
    <footer-page v-show="needFooter"></footer-page>
  </div>
</template>

<script>
import './css/github-md.css';
import './css/github.min.css';
import headerPage from './components/header/index.vue';
import bodyPage from './components/body/index.vue';
import managePage from './page/manage/body/index.vue';
import file from './page/file/index.vue';
import footerPage from './components/footer/index.vue';
export default {
  components:{headerPage,bodyPage,footerPage, managePage, file},
  name: 'App',
  data() {
    return {
      isManage: false,
      needHeader: true,
      needFooter: true,
      needLeft: true,
      isFile: false
    }
  },
  methods: {
    backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=13;
            document.documentElement.scrollTop-=13;
          }else {
            clearInterval(back)
          }
        });
    },
  },
  watch: {
    '$route.fullPath': {
      handler: function(n) {
        this.backTop();
        let regManage = new RegExp("^/manager");
        let regEdit = new RegExp("^/edit");
        if(regEdit.test(n)) {
          this.needHeader = true;
          this.needFooter = false;
          this.needLeft = false;
        } else if("/login" === n) {
          this.needHeader = false;
          this.needFooter = false;
          this.needLeft = false;
        } else if("/file" === n) {
          this.needHeader = false;
          this.needFooter = false;
          this.isFile = true
        } else if(regManage.test(n)) {
          this.isManage = true;
        } else {
          this.isManage = false;
          this.needHeader = true;
          this.needFooter = true;
          this.needLeft = true;
        }
      },
      immediate: true
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 70px;
}
body {
  background-color: #ebebeb;
}
.panel-default > .panel-heading {
    background: white;
    text-align: center;
    font-size: 1.5em;
}
.panel-default > .panel-footer {
    background-color: white;
    padding: 20px;
    color: #959595;
}
.panel {
    border: 0;
    font: 400 14px/1.62 Georgia,"Xin Gothic","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;          
}
</style>
