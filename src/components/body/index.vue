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
import bodyRight from './body-right/index.vue';
export default {
    components:{bodyLeft, bodyRight},
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