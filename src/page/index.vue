<template>
  <div class="container">
    <div class="row" style="margin: 0">
        <div class="col-sm-4 col-md-12">
            <Header></Header>
            <div style="padding-top: 70px">
                <keep-alive :include="includedComponents" :exclude="excludedComponents">
                  <router-view v-if="$route.meta.keepAlive" :key="$route.name" />
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" :key="$route.name" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/page/common/footer/footer'
import Header from '@/page/common/header/header'
export default {
  components: {Footer, Header},
  data () {
    return {
      excludedComponents: [],
      includedComponents: []
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
