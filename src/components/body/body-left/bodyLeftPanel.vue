<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">{{panelName}}</div>
        <ul class="list-group" style="text-align:left">
            <li v-for="data in datas" v-bind:key="data.id" class="list-group-item">
                {{data.content}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'bodyLeftPanel',
    props: {
        datas:{
            type:Array,
            default:() => {return []}
        },
        panelName:{
            type: String
        }
    }
}
</script>

<style scoped>
</style>


