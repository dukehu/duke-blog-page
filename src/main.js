// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios.js';

import 'mavon-editor/src/lib/css/mavon-editor.styl';
import Timeline from 'hzqing-vue-timeline';

Vue.config.productionTip = false
Vue.use(Timeline)
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
