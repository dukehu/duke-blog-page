<template>
      <div class="row">
          <manage-left></manage-left>
          <div class="col-sm-4 col-md-9">
             <slot></slot>
          </div>
    </div>
</template>

<script>
import manageLeft from './body-left/index.vue';
export default {
    components: {manageLeft}
}
</script>

<style scoped>

</style>
