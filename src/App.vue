<template>
  <div id="app">
    <!-- 页面的header部分 -->
    <header-page id="headerPage"></header-page>
    <div class="container">
      <body-page :hide-left="hideLeft">
          <router-view/>
      </body-page>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import headerPage from './components/header/index.vue';
import bodyPage from './components/body/index.vue';
import footerPage from './components/footer/index.vue';
export default {
  components:{headerPage,bodyPage,footerPage},
  name: 'App',
  data() {
    return {
      hideLeft: false
    }
  },
  watch:{
    '$route.fullPath': {
      handler: function(n) {
        if("/edit" === n) {
          this.hideLeft = true;
        } else {
          this.hideLeft = false;
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
pre {
    background-color:  #1d1f21;
    color: grey;
}
.panel-default > .panel-heading {
    background-color: white;
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
    font: 400 16px/1.62 Georgia,"Xin Gothic","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;
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
