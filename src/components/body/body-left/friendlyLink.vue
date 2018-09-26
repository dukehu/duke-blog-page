<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">友情链接</div>
        <ul class="list-group" style="text-align:left">
            <li style="cursor:pointer; color: #337ab7" 
                :title="data.title" 
                v-for="data in datas" 
                v-bind:key="data.id" 
                class="list-group-item">
                <a style="text-decoration:none" :href="data.url" target="view_window">{{data.title}}</a>
            </li>
        </ul>
        <div v-show="datas.length <= 0" style="height:200px;padding: 80px 0;">暂无数据</div>
    </div>
</template>

<script>
export default {
    name: 'friendlyLink',
    props: {
        datas: {
            type:Array,
            default:() => {return []}
        }
    }
}
</script>

<style scoped>
</style>


