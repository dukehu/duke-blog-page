export default [
  {
    path: '/',
    name: 'index',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/article/index.vue')
  },
  {
    path: '/articles/:name?/:id',
    name: 'article',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/article/detail.vue')
  },
  {
    path: '/archives',
    name: 'archive',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/archive/archive.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/tag/tag.vue')
  },
  {
    path: '/tags/:tag?',
    name: 'tags',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/article/index.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/category/category.vue')
  },
  {
    path: '/categories/:category?',
    name: 'categories',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/article/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requireAuth: false
    },
    component: () => import('@/page/blog/about-me/about.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    components: {

    }
  },
  {
    path: '/file',
    name: 'file',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/blog/file/file.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/blog/edit/edit.vue')
  }
]
