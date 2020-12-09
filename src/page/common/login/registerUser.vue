<template>
    <el-card>
        <el-form ref="loginForm" :model="user">
            <el-form-item>
                <el-input
                    clearable
                    placeholder="用户名"
                    v-model="user.name">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    clearable
                    placeholder="密码"
                    v-model="user.password"
                    show-password>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    clearable
                    placeholder="确认密码"
                    v-model="user.password"
                    show-password>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    clearable
                    placeholder="11位手机号"
                    v-model="user.name">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    clearable
                    placeholder="请输入验证码"
                    v-model="user.verificationCode">
                    <template slot="prepend"><i class="el-icon-message"/></template>
                    <el-button slot="append">获取验证码</el-button>
                </el-input>
            </el-form-item>
        </el-form>
        <div style="margin-bottom: 10px">
            <el-button type="primary" style="width: 50%">注 册</el-button>
            <el-button type="text" style="float:right" @click="userExistedAccountLogin">使用已有账号登陆</el-button>
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
      default: false
    }
  },
  data () {
    return {
      user: {}
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    userExistedAccountLogin () {
      this.$emit('update:isLogin', true)
    }
  }
}
</script>
