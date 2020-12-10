export default {
  // 预算管理部门下发
  getArticles (params) {
    return this.$axios('GET', '/api/blog/blog_article', params)
  }
}
