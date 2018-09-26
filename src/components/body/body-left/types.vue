<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">分类</div>
        <ul class="list-group" style="text-align:left">
            <li style="cursor:pointer; color: #29afec; border: 0;" 
                class="list-group-item" 
                v-for="data in datas" 
                :key="data.id">
                {{data.type}}<span style="padding: 8px;color: #000">({{data.count}})</span>
            </li>
        </ul>
        <div v-show="datas.length <= 0" style="padding: 30px 0; text-align:center;">暂无分类</div>
    </div>
</template>

<script>
export default {
    name: 'type',
    props: {
        datas: {
            type:Array,
            default:() => {return []}
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
</style>