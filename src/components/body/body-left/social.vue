<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">社交</div>
        <div style="padding: 14px;">
            <a class="btn btn-default" 
                v-for="data in datas" 
                :key="data.id" 
                :href="data.url"
                target="view_window"
                :title="data.title"
                style="padding:10px 12px; margin-right: 15px; color: #fff;"
                :style="{ background: data.backgroundColor}"
                @mouseenter="data.backgroundColor='#29afec'"
                @mouseleave="data.backgroundColor='grey'"
                >
                <i :class="data.icon" ></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social',
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
.panel-default > .panel-heading {
    background-color: white;
    text-align: center;
    font-size: 1.5em;
}
.panel {
    border: 0;
}
</style>