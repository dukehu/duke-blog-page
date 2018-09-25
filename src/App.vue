<template>
  <div id="app">
    <!-- 页面的header部分 -->
    <header-page id="headerPage"></header-page>
    <div class="container">
      <body-page>
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
</style>
