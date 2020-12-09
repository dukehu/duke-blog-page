<template>
    <el-card>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="账号密码登陆" name="userNamePasswordLogin">
                    <el-form ref="userNamePasswordLoginForm" :rules="rules" :model="user">
                    <el-form-item prop="username">
                        <el-input
                            clearable
                            placeholder="请输入账号"
                            v-model="user.username">
                            <template slot="prepend"><i class="el-icon-user"/></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            clearable
                            placeholder="请输入密码"
                            v-model="user.password"
                            show-password>
                            <template slot="prepend"><i class="el-icon-lock"/></template>
                        </el-input>
                    </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="手机号登陆" name="mobileLogin">
                    <el-form ref="mobileLoginForm" :rules="rules" :model="user">
                    <el-form-item prop="mobileNumber">
                        <el-input
                            clearable
                            placeholder="请输入手机号"
                            v-model="user.mobileNumber">
                            <template slot="prepend"><i class="el-icon-mobile-phone"/></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="verificationCode">
                        <el-input
                            clearable
                            placeholder="请输入验证码"
                            v-model="user.verificationCode">
                            <template slot="prepend"><i class="el-icon-message"/></template>
                            <el-button slot="append">获取验证码</el-button>
                        </el-input>
                    </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        <div style="margin-bottom: 10px">
            <el-checkbox v-model="autoLogin">自动登陆</el-checkbox>
            <el-link :underline="false" type="success" style="float: right">忘记密码</el-link>
        </div>
        <el-button type="primary" style="width: 100%" @click="loginConfirm" :loading="confirmButtonLoading">确 认</el-button>
        <div style="margin-top: 10px">
            <font size="2">其他登陆方式</font>
            <i class="fa fa-weixin" aria-hidden="true"></i>
            <el-link @click="registerUser" :underline="false" type="success" style="float: right">注册用户</el-link>
        </div>
    </el-card>
</template>
<script>
export default {
  components: {
  },
  name: 'userLogin',
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      confirmButtonLoading: false,
      user: {
        username: '',
        password: '',
        mobileNumber: '',
        verificationCode: ''
      },
      activeName: 'userNamePasswordLogin',
      autoLogin: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        mobileNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度应为 11 个字符', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度应为 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    handleClick (tab, event) {
      this.activeName = tab.name
    },
    // 注册用户
    registerUser () {
      this.$emit('update:isLogin', false)
    },
    // 确认登陆
    loginConfirm () {
      this.user.loginType = 1
      let ref = 'userNamePasswordLoginForm'
      if (this.activeName === 'mobileLogin') {
        ref = 'mobileLoginForm'
        this.user.loginType = 2
      }
      this.$refs[ref].validate((valid) => {
        if (valid) {
          this.confirmButtonLoading = true
          this.$axios('post', '/api/auth/sign_in', this.user)
            .then(res => {
              if (res.status === 200) {
                this.$notify({
                  title: '提示',
                  message: '登陆成功',
                  type: 'success'
                })
                // 登录成功
                this.$router.push({path: '/'})
              } else {
                this.confirmButtonLoading = false
                this.$notify({
                  title: '警告',
                  message: res.message,
                  type: 'warning'
                })
              }
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
