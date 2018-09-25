<template>
    <div class="col-md-3 col-sm-4">
        <site-search></site-search>
        <latest-articles :datas="latestRecommendedArticles"></latest-articles>
        <social :datas="socials"></social>
        <friendly-link :datas="friendlyLink"></friendly-link>
    </div>
</template>

<script>
import latestArticles from './latestArticles.vue';
import siteSearch from './siteSearch.vue';
import friendlyLink from './friendlyLink.vue';
import social from './social.vue';
export default {
     components:{latestArticles, siteSearch, friendlyLink, social},
     data(){
         return {
             latestRecommendedArticles: [],
             friendlyLink: [
                {id: '1', title: '我思故我在', url: 'http://zeral.top/'},
                {id: '2', title: 'Duke`s blog', url: 'http://dukehu.top'}
             ],
             socials: [
                {id: '1', title: 'github', icon: 'fa fa-github fa-lg', url: 'https://github.com/dukehu', backgroundColor: 'grey'},
                {id: '2', title: 'git@osc', icon: 'fa fa-git fa-lg', url: 'https://gitee.com/dukehu', backgroundColor: 'grey'},
                {id: '3', title: 'email', icon: 'fa fa-envelope-o fa-lg', url: '', backgroundColor: 'grey'}
             ]
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