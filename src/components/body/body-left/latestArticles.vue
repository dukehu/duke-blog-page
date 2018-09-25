<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">最新推荐</div>
        <ul class="list-group" style="text-align:left">
            <li style="cursor:pointer; color: #337ab7" 
                :title="data.title" 
                v-for="data in datas" 
                v-bind:key="data.id" 
                class="list-group-item" 
                @click="detail('latestArticles', data.id)">
                {{data.title}}
            </li>
        </ul>
        <div v-show="datas.length <= 0" style="height:200px;padding: 80px 0;">暂无数据</div>
    </div>
</template>

<script>
export default {
    name: 'latestArticles',
    props: {
        datas: {
            type:Array,
            default:() => {return []}
        }
    },
    methods: {
        detail(type,id) {
            this.$router.push({
                path: `/articles/${type}/${id}`,
            })
        }
    }
}
</script>

<style scoped>
.panel-default > .panel-heading {
    background-color: white;
    text-align: center;
    font-size: 1.5em;
}
.panel {
    border: 0;
}
</style>


