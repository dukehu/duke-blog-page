<template>
    <div class="col-md-3 col-sm-4">
        <site-search></site-search>
        <latest-articles :datas="latestRecommendedArticles"></latest-articles>
        <social :datas="socials"></social>
        <type :datas="types"></type>
        <d-label :datas="labels"></d-label>
        <friendly-link :datas="friendlyLink"></friendly-link>
    </div>
</template>

<script>
import latestArticles from './latestArticles.vue';
import siteSearch from './siteSearch.vue';
import friendlyLink from './friendlyLink.vue';
import social from './social.vue';
import type from './types.vue';
import DLabel from './labels.vue';
export default {
     components:{latestArticles, siteSearch, friendlyLink, social, type, DLabel},
     data(){
         return {
             latestRecommendedArticles: [],
             friendlyLink: [
                {id: '1', title: '我思故我在', url: 'http://zeral.top/'},
                {id: '2', title: 'Duke`s blog', url: 'http://dukehu.top'},
                {id: '3', title: 'MD2PDF-Converting', url: 'http://www.mdtr2pdf.com/index_en.html'},
             ],
             socials: [
                {id: '1', title: 'github', icon: 'fa fa-github fa-lg', url: 'https://github.com/dukehu', backgroundColor: 'grey'},
                {id: '2', title: 'git@osc', icon: 'fa fa-git fa-lg', url: 'https://gitee.com/dukehu', backgroundColor: 'grey'},
                {id: '3', title: 'email', icon: 'fa fa-envelope-o fa-lg', url: '', backgroundColor: 'grey'}
             ],
             types: [],
             labels: []
         }
     },
     methods: {
         getLatestRecommendedArticles() {
            this.$axios('get','/api/blog/nologin/latest_articles').then(data => {
                this.latestRecommendedArticles = data.data;
            })
         },
         getTags() {
            this.$axios('get', "/api/blog/nologin/blog_label").then(data => {
                this.labels = data.data;
            })
        },
        getTypes() {
            this.$axios('get', "/api/blog/nologin/blog_type").then(data => {
                this.types = data.data;
            })
        }
     },
     created() {
        this.getLatestRecommendedArticles();
        this.getTags();
        this.getTypes();
     }
}
</script>

<style scoped>
</style>