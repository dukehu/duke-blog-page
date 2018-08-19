import Vue from 'vue'
import Router from 'vue-router'
import Detail from  '@/page/detail/index.vue';
import Edit from  '@/page/edit/index.vue';
import Login from  '@/page/login/index.vue';
import Body from '@/components/body/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: Body
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})
