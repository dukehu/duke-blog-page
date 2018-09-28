<template>
    <div>
        <div class="col-md-3 col-sm-4">
            <a class="logo" @click="goHome">Duke`s Blog</a>
        </div>
        <div class="col-sm-offset-1 col-md-5 col-sm-4 main">
            <div style="text-align:center" class="title">
                <h3><a>登陆</a> · <a>注册</a></h3>
            </div>
            <form class="form-horizontal" role="form">
                <div class="form-group" v-show="showError">
                    <div class="col-sm-offset-1 col-sm-4 col-md-10 error">
                        {{errorMessage}}
                    </div>
                </div>
                <div class="form-group" v-show="showSuccess">
                    <div class="col-sm-offset-1 col-sm-4 col-md-10 success">
                        登陆成功，即将跳转至首页...
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-1 col-sm-4 col-md-10 input-group">
                        <span style="cursor: pointer;" class="input-group-addon">
                            <i class="fa fa-user fa-lg"></i>
                        </span>
                        <input style="height: 40px; background-color: #eee" type="text" class="form-control" placeholder="请输入账号" v-model="userName">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-1 col-sm-4 col-md-10 input-group">
                        <span style="cursor: pointer;" class="input-group-addon">
                            <i class="fa fa-lock fa-lg"></i>
                        </span>
                        <input style="height: 40px; background-color: #eee" type="password" class="form-control" placeholder="请输入密码" v-model="password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-1 col-sm-10">
                        <button type="button" @click="login" class="btn btn-primary btn-lg btn-block" style="border-radius: 25px;">登陆</button>
                    </div>
                </div>
            </form>
            <div>
                <hr/>
                <ul>
                    <li v-for="social in socials" :key="social.id">
                        <i :class="social.icon" style="cursor: pointer;" :title="social.name"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            userName: '',
            password: '',
            showError: false,
            showSuccess: false,
            errorMessage: '',
            socials: [
                {id: 'github', name: 'github', icon: 'fa fa-github fa-2x'},
                {id: 'weixin', name: 'weixin', icon: 'fa fa-weixin fa-2x'},
                {id: 'qq', name: 'qq', icon: 'fa fa-qq fa-2x'},
            ]
        }
    },
    methods: {
        getSocials() {
            
        },
        login() {
            if(this.userName === '' || this.password === '') {
                this.showError = true;
                this.errorMessage = "用户名密码不能为空！";
            } else {
                this.$axios('post','/api/auth/auth/sign_in', {
                    username: this.userName,
                    password: this.password
                }).then(data => {
                    this.showSuccess = true;
                })
            }
            this.wait();
        },
        wait() {
            clearInterval(this.timer)
            if(this.showSuccess) {
                this.timer = setInterval(()=>{
                    this.$router.push("/");
                }, 1500);
            }
            if(this.showError) {
                this.timer = setInterval(()=>{
                    this.showError = false;
                }, 1500);
            }
        },
        goHome() {
            this.$router.push("/");
        }
    },
    created() {
        this.getSocials();
    },
    beforeDestroy() {
        if(this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
            clearInterval(this.timer); //关闭
        }
    }
}
</script>

<style scoped>
.logo {
    font-size:2.3em;
    color:#ea6f5a;
}
a {
   font-weight:bold;
   cursor:pointer;
   text-decoration: none;
}
.panel {
    background-color: #ebebeb;
}
.panel-heading {
    background-color: #ebebeb;
}
.error {
    background: #f2dede; 
    border-color: #ebccd1; 
    color: #a94442;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 4px; 
}
.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
}
.main {
    width: 400px;
    margin-top: 70px;
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
}
button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}
.title {
    margin: 0 auto 20px;
    padding: 10px;
    font-weight: 400;
    color: #969696
}
ul {
    margin:0 60px;
    display: block;
    overflow: hidden;
    white-space:nowrap;
}
li{
    list-style: none;
    display: inline-block; 
    width: 50px;
}
</style>

