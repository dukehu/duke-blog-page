<template>
    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control"  placeholder="请输入关键字">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" v-popover:myname>
                    站内搜索
                    <popover name="myname" style="width:340px; left: -250px; top: 44px;text-align:left;">
                        <ul class="list-group">
                            <li class="list-group-item">IDEA中配置使用JRebel</li>
                            <li class="list-group-item">Blog开发日记</li>
                            <li class="list-group-item">记录一个文件压缩的工具类</li>
                            <li class="list-group-item">spring boot 项目打包之jar运行</li>
                        </ul>
                        <!-- https://github.com/euvl/vue-js-popover -->
                    </popover>
                </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'siteSearch',
    methods: {
    }
}
</script>

<style scoped>

</style>
