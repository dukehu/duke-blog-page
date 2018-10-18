<template>
    <div class="panel panel-default" style="padding: 15px;">
        <h2>共计{{categories.length}}个分类</h2>
        <hr 
            style="filter: progid:dximagetransform.microsoft.glow(color='#987cb9',strength=10)" 
            width="100%" color="#987cb9" 
            size=1 />
        <ul v-for="category in categories" :key="category.id">
            <li><a @click="queryByCategory(category.name)">{{category.name}}</a></li>
        </ul>
        
        <div style="height: 200px; text-align:center;padding-top: 70px;font-size:1.5em;" 
            v-show="categories.length <= 0">
            暂无分类数据
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
            ]
        }
    },
    methods: {
        queryByCategory(category) {
            this.$router.push("/categories/" + category);
        },
        getCategories() {
            this.$axios('get', "/api/blog/nologin/blog_type").then(data => {
                this.categories = data.data;
            })
        },
    },
    created() {
        this.getCategories();
    }
}
</script>

<style scoped>
ul li a {
    cursor: pointer;
    font-size: 1.3em;
}
</style>
