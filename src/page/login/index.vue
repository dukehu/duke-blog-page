<template>
    <div class="col-sm-3 col-md-9" style="float:right; padding-top:200px;">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="firstname" class="col-sm-2 control-label">名字</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="firstname" placeholder="请输入名字">
                </div>
            </div>
            <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">姓</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="lastname" placeholder="请输入姓">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-4">
                    <button type="submit" @click="login" class="btn btn-default">登录</button>
                    <button type="submit" class="btn btn-default">取消</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labels:[]
        }
    },
    methods: {
        login() {
            console.log("111111");
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>

</style>

