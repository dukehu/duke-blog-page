import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '@/router/children/main.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    meta: {
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/page/common/404.vue') // 主内容
  },
  {
    ...main
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
