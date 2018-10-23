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
      components: {
        front: Body
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        front: Login
      }
    },
    {
      path: '/articles/:name?/:id',
      name: 'article',
      component: Article,
      components: {
        front: Article
      }
    },
    {
      path: '/edit/:id?',
      name: 'edit',
      components: {
        front: Edit
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        front: About
      }
    },
    {
      path: '/archives/',
      name: 'archive',
      components: {
        front: Archive
      }
    },
    {
      path: '/tags',
      name: 'tags',
      components: {
        front: Tag
      }
    },
    {
      path: '/tags/:tag?',
      name: 'tags',
      components: {
        front: Body
      }
    },
    {
      path: '/categories',
      name: 'categories',
      components: {
        front: Category
      }
    },
    {
      path: '/categories/:category?',
      name: 'categories',
      components: {
        front: Body
      }
    },
    {
      path: '/manager',
      name: 'manager',
      components: {
        manager: Articles
      }
    },
    {
      path: '/manager/profile',
      name: 'profile',
      component: Profile,
      components: {
        manager: Profile
      }
    }
  ]
})
