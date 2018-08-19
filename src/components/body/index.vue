<template>
    <div class="row">
        <body-left></body-left>
        <body-right></body-right>
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