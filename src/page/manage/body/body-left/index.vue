<template>
    <div class="col-md-3 col-sm-4">
        <div class="panel panel-default">
            <div class="panel-heading" style="text-align:left">后台管理</div>
            <ul class="list-group" style="text-align:left">
                <li style="cursor:pointer;" 
                    class="list-group-item"
                    v-for="category in categroies"
                    :key="category.id">
                    <a style="text-decoration:none" @click="changePage(category.router)">
                        <i :class="category.icon"></i>&nbsp; {{category.name}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categroies: [
                {id: 'my_article', name: '我的文章', icon: 'fa fa-book fa-fw', router: '/manager'},
                {id: 'profile', name: '个人信息', icon: 'fa fa-user fa-fw', router: '/manager/profile'},
                {id: 'setting', name: '博客配置', icon: 'fa fa-cog fa-fw', router: '/manager/setting'}
            ]
        }
    },
    methods: {
        changePage(router) {
            this.$router.push(router);
        }
    }
}
</script>

<style scoped>

</style>
