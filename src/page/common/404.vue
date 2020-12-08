<!-- 通用404页面 -->
<template>
    <div class="block">
      <div>
        <span style="font-size: 200px;">404</span>
      </div>
      <div>
        <span style="font-size: 20px;">点击返回<a href="#" @click="toHome">首页</a></span>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.block {
    width: 100%;
    height: calc(100vh);
}
</style>
