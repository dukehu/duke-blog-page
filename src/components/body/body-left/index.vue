<template>
    <div class="col-md-4 col-sm-3">
        <body-left-panel :datas="datas1" :panel-name="panelName1"></body-left-panel>
        <body-left-panel :datas="datas2" :panel-name="panelName2"></body-left-panel>
    </div>
</template>

<script>
import bodyLeftPanel from './bodyLeftPanel.vue';
export default {
     components:{bodyLeftPanel},
     data(){
         return {
             datas1:[
                 {id: '1', content: '茫茫人海之中我的女人'},
                 {id: '2', content: '茫茫人海之中我的女人'},
                 {id: '3', content: '茫茫人海之中我的女人'},
                 {id: '4', content: '茫茫人海之中我的女人'},
                 {id: '5', content: '茫茫人海之中我的女人'}
             ],
             panelName1: '最新推荐',
             datas2:[
                 {id: '1', content: 'Duke`s blog'},
                 {id: '2', content: 'Duke`s blog'},
                 {id: '3', content: 'Duke`s blog'},
                 {id: '4', content: 'Duke`s blog'},
                 {id: '5', content: 'Duke`s blog'}
             ],
             panelName2: '友情链接'
         }
     }
}
</script>

<style scoped>

</style>