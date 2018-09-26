<template>
    <div class="panel panel-default" style="padding: 15px 0;">
        <span style="font-size:2.2em; padding:45px;">2018年</span>
        <ul style="text-align:left; font-size:1.2em">
            <li style="cursor:pointer; padding:5px;" 
                :title="data.title" 
                v-for="data in datas" 
                v-bind:key="data.id" >
                <a @click="toDetail(data.id)" style="color: #337ab7;">{{data.title}}</a>
            </li>
        </ul>
        <div v-show="datas.length <= 0" style="height:200px;padding: 80px 0;text-align:center;">暂无数据</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas:[]
        }
    },
    methods: {
         getArchives() {
            this.$axios('get','/api/blog/nologin/archive_query').then(data => {
                this.datas = data.data;
            })
         },
         toDetail(id) {
             this.$router.push({
                path: `/articles/archives/${id}`,
             })
         }
     },
     created() {
        this.getArchives();
     }
}
</script>

<style scoped>

</style>
