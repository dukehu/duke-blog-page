import auth from '@/router/children/blog'

export default {
  path: '/',
  name: '',
  component: () => import('@/page/index.vue'), // 主内容
  meta: {
    requireAuth: false
  },
  children: [
    ...auth
  ]
}
