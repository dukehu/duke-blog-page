<template>
    <div>
        <Articles />
        <Left />
    </div>
</template>

<script>
import Left from '@/page/blog/article/left/index'
import Articles from '@/page/blog/article/articles'
export default {
  components: {Articles, Left},
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
