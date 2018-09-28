<template>
    <div class="row">
        <div class="col-sm-4" :class="hideLeft ? 'col-md-12' : 'col-md-9'">
            <slot></slot>
        </div>
        <body-left v-show="!hideLeft"></body-left>
    </div>
</template>

<script>
import bodyLeft from './body-left/index.vue';
export default {
    components:{bodyLeft},
    name: 'bodyPage',
    props: {
        hideLeft: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>