import Vue from 'vue'
import Router from 'vue-router'
import Article from  '@/page/detail/index.vue';
import Edit from  '@/page/edit/index.vue';
import Login from  '@/page/login/index.vue';
import Body from '@/components/body/body-right/index.vue';
import Tag from '@/page/tag/index.vue';
import Category from '@/page/category/index.vue';
import Archive from  '@/page/archive/index.vue';
import About from  '@/page/about-me/index.vue';
import Articles from  '@/page/manage/articles/index.vue';
import Profile from  '@/page/manage/profile/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'body',
      component: Body
    },
    // {
    //   path: '/page/:currentPage?',
    //   name: 'body',
    //   component: Body
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/articles/:name?/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/edit/:id?',
      name: 'edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/archives/',
      name: 'archive',
      component: Archive
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tag
    },
    {
      path: '/tags/:tag?',
      name: 'tags',
      component: Body
    },
    {
      path: '/categories',
      name: 'categories',
      component: Category
    },
    {
      path: '/categories/:category?',
      name: 'categories',
      component: Body
    },
    {
      path: '/manager',
      name: 'manager',
      component: Articles
    },
    {
      path: '/manager/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
