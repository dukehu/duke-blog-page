<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left; font-size:1.3em;font-weight:bold;">
            <i class="fa fa-user fa-fw"></i>个人信息
        </div>
        <div class="panel-body" style="padding: 20px 70px;">
            <div class="avatar">
                <img style="" src="../../../imgs/user.png" />
                <!-- <a type="submit" 
                    class="btn btn-default" 
                    style="border-radius: 20px;border: 0;"
                    @click="edit">
                    <i class="fa fa-cloud-upload fa-lg"></i>
                    上传图片
                </a> -->
            </div>
            <div class="info">
                <span style="padding: 0 30px 20px 0;display:inline-block;">
                    <span style="font-size:1.3em;">账号：</span> 779377254@qq.com
                </span>
                <span style="padding: 0 30px 20px 0;display:inline-block;">
                    <span style="font-size:1.3em;">账号：</span> 779377254@qq.com
                </span>
                <span style="padding: 0 30px 20px 0;display:inline-block;">
                    <span style="font-size:1.3em;">账号：</span> 779377254@qq.com
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info {
    width: 70%;
}
.avatar {
    float: right;
    width: 20%;
}
.avatar > img {
    width: 110px;
    border-radius: 55px;
    border: 1px solid grey;
    padding: 4px;
}
</style>
