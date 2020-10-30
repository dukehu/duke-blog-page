// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mavon-editor/src/lib/css/mavon-editor.styl';
// 视频播放器插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VideoPlayer)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
