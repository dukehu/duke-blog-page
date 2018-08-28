<template>
    <div class="col-md-4 col-sm-3">
        <body-left-panel :datas="latestRecommendedArticles" :panpel-type="latestRecommendedArticlesPanelType" :panel-name="latestRecommendedArticlesPanelName"></body-left-panel>
        <body-left-panel :datas="friendlyLink" :panel-name="friendlyLinkPanelName"></body-left-panel>
    </div>
</template>

<script>
import bodyLeftPanel from './bodyLeftPanel.vue';
export default {
     components:{bodyLeftPanel},
     data(){
         return {
             latestRecommendedArticles:[],
             latestRecommendedArticlesPanelName: '最新推荐',
             latestRecommendedArticlesPanelType: '1',
             friendlyLink:[
                 {id: '1', title: '我思故我在', url: ''},
                 {id: '2', title: 'Duke`s blog', url: ''},
                 {id: '3', title: 'Duke`s blog', url: ''},
                 {id: '4', title: 'Duke`s blog', url: ''},
                 {id: '5', title: 'Duke`s blog', url: ''}
             ],
             friendlyLinkPanelName: '友情链接'
         }
     },
     methods: {
         getLatestRecommendedArticles() {
            this.$axios('get','/api/blog/nologin/latest_articles').then(data => {
                this.latestRecommendedArticles = data.data;
            })
         }
     },
     created() {
        this.getLatestRecommendedArticles();
     }
}
</script>

<style scoped>

</style>