<template>
  <div id="app">
    <!-- 页面的header部分 -->
    <header-page id="headerPage"></header-page>
    <div class="container" style="margin-bottom:20px;">
      <router-view/>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
