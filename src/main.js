// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vue 操作cookies插件
import VueCookies from 'vue-cookies'
// import 'mavon-editor/src/lib/css/mavon-editor.styl'
// 视频播放器插件
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
// Vue.use(VideoPlayer)

router.beforeEach((to, from, next) => {
  let accessToken = VueCookies.get('_d_access_token_')
  // 使用accessToken去后台验证
  if (to.matched.some(r => r.meta.requireAuth)) {
    console.log('需要鉴权', accessToken)
    if (accessToken) { // vuex.state判断token是否存在
      next() // 已登录
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    console.log('不需要鉴权', accessToken)
    if (to.path === '/login' && accessToken) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
