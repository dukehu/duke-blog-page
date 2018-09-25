<template>
    <div class="row">
        <body-left></body-left>
        <div class="col-md-9 col-sm-4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import bodyLeft from './body-left/index.vue';
import bodyRight from './body-right/index.vue';
export default {
    components:{bodyLeft, bodyRight},
    name: 'bodyPage',
    props: {

    },
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>