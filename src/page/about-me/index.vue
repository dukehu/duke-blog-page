<template>
    <div class="row" style="text-align:left;">
        <div class="col-md-2 col-sm-3">
        </div>
        <div class="panel panel-default col-md-8 col-sm-3 markdown-body" style="padding:0px;text-align:left;">
            <div class="panel-body" v-html="content">
                这是一个基本的面板
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            content: `
<h2><a id="_2"></a>个人资料</h2>
<blockquote>
<p>中文名：胡明<br>
英文名：duke<br>
github：https://github.com/dukehu<br>
码云：https://gitee.com/dukehu<br>
邮箱：duke0417@foxmail.com<br>
手机号：188********</p>
</blockquote>
<h2><a id="_11"></a>专业技能</h2>
<blockquote>
<p>java、mysql<br>
vue<br>
spring boot 、spring cloud</p>
</blockquote>
<h2><a id="_16"></a>欢迎勾搭</h2>
<p><img src="https://raw.githubusercontent.com/dukehu/notes/master/img/duke_weixin.jpg" alt="Image_text"></p>`
        }
    }
}
</script>

<style scoped>
.panel-body >>> img{
    display: inline-block;
    height: auto;
    max-width: 100%;
}
</style>
