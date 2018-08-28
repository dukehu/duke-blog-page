<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">{{panelName}}</div>
        <ul class="list-group" style="text-align:left">
            <li style="cursor:pointer" :title="data.title" v-for="data in datas" v-bind:key="data.id" class="list-group-item" @click="operate(panpelType, data.id)">
                {{data.title}}
            </li>
        </ul>
        <div v-show="datas.length <= 0" style="height:200px;padding: 80px 0;">暂无数据</div>
    </div>
</template>

<script>
export default {
    name: 'bodyLeftPanel',
    props: {
        datas: {
            type:Array,
            default:() => {return []}
        },
        panelName: {
            type: String
        },
        panpelType: {
            type: String
        }
    },
    methods: {
        operate(panpelType, id) {
            if(panpelType === '1') {
                this.$router.push({
                    path: `/detail/${id}`,
                })
            }
        }
    }
}
</script>

<style scoped>
</style>


