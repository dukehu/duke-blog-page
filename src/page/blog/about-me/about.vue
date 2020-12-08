<!-- 关于我 -->
<template>
    <div>
        <div class="panel panel-default markdown-body">
            <div class="panel-heading" style="font-size:2em;">关于我</div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.8em;">胡明</h1>
                <hr class="simple"/>
                <p style="font-size:1.1em">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陕西西安人，自2016年10月08日（当时上大四）至今，从事软件行业<span style="color:red">{{workYears}}</span>年，
                    本人热爱技术，热爱生活，目前在西安工作，英文名：Duke；
                </p>
                <p style="font-size:1.1em">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前学习中心在java基础、数据结构、数据库优化这块。
                </p>
                <p style="font-size:1.1em">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会将在学习中遇到的问题，以及学习笔记在本博客做相关记录，
                    方便以后学习。
                </p>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.8em;">社交</h1>
                <hr class="simple"/>
                <ul style="color:grey; font-size:1.3em">
                    <li>github:<a style="padding-left:10px;cursor:pointer;" href="https://github.com/dukehu" target="view_window">https://github.com/dukehu</a></li>
                    <li>gitee :<a style="padding-left:10px;cursor:pointer;" href="https://gitee.com/dukehu" target="view_window">https://gitee.com/dukehu</a></li>
                    <li>email:<a style="padding-left:10px;cursor:pointer;">duke0417@foxmail.com</a></li>
                </ul>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.8em;">技术清单</h1>
                <hr class="simple"/>
                <ul style="color:grey; font-size:1.3em">
                    <li>编程语言: <span style="padding-left:10px;color:#337ab7">java、html、javaScript、css</span></li>
                    <li>后端框架: <span style="padding-left:10px;color:#337ab7">spring、spring mvc、spring boot、spring cloud、mybatis</span></li>
                    <li>前端框架:<span style="padding-left:10px;cursor:pointer;">vue、boostrap</span></li>
                    <li>数 据 库:<span style="padding-left:10px;cursor:pointer;">mysql</span></li>
                    <li>开发工具:<span style="padding-left:10px;cursor:pointer;">Idea、Eclipse</span></li>
                </ul>
            </div>
        </div>
       <div class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.8em;">个人作品</h1>
                <hr class="simple"/>
                <ul style="color:grey; font-size:1.3em;line-height:2">
                    <li>多人博客系统: <span style="color:#111; font-size:0.8em">技术方面采用目前流行的前后端分离技术，
                        前端使用的是vue，后端使用的是spring boot、spring cloud、mybatis框架，使用spring security做权限控制；
                        代码已在
                        <a style="padding-left:5px;cursor:pointer;" href="https://github.com/dukehu" target="view_window">github</a>、
                        <a style="padding-left:5px;cursor:pointer;" href="https://gitee.com/dukehu" target="view_window">码云</a>上进行托管。
                        <a style="cursor:pointer;" href="http://dukehu.top/articles/vue/822e3748-71e2-4593-a9dd-0be075763641" target="view_window">了解更多</a></span>
                        </li>
                    <li>后端权限管理系统: <span style="color:#111; font-size:0.8em">跟博客项目采用了相同的技术，
                        该系统主要对接口后端接口进行保护，采用RBAC用户角色设计方案，主要分为：用户管理、角色管理、前端资源管理、
                        操作码管理等模块；通过操作码与资源的关系来确保前端资源（包括按钮、页面等）能访问哪些接口，通过角色与资源的关系
                        来建立某一些角色可以访问前端哪些资源，通过用户与角色的关系来确定用户有哪些关系，最中形成了一套完整的权限管理系统；
                        代码已在
                        <a style="padding-left:5px;cursor:pointer;" href="https://github.com/dukehu" target="view_window">github</a>、
                        <a style="padding-left:5px;cursor:pointer;" href="https://gitee.com/dukehu" target="view_window">码云</a>上进行托管。
                        <a style="cursor:pointer;" href="http://dukehu.top/articles/spring%20boot/ed7bfc82-d369-42f8-9f23-5ea64a100810" target="view_window">了解更多</a></span></li>
                </ul>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                <h1 style="font-size:1.8em;">欢迎联系</h1>
                <hr class="simple"/>
                <div style="text-align:center">
                    <img style="width: 200px;" src="@/imgs/duke_weixin.jpg" />
                </div>
            </div>
        </div>
        <back-top></back-top>
    </div>
</template>

<script>
import backTop from '@/page/common/backTop.vue'
export default {
  components: {backTop},
  data () {
    return {
      comments: [],
      workYears: ''
    }
  },
  methods: {
    // 获取现在时间
    getNowFormatDate () {
      let date = new Date()
      let seperator1 = '-'
      let seperator2 = ':'
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
      return currentdate
    },
    getHour (s1, s2) {
      s1 = new Date(s1.replace(/-/g, '/'))
      s2 = new Date(s2.replace(/-/g, '/'))
      let ms = Math.abs(s1.getTime() - s2.getTime())
      return ms / 1000 / 60 / 60 / 24 / 365
    }
  },
  created () {
    let nowStr = this.getNowFormatDate()
    this.workYears = this.getHour(nowStr, '2016-10-08 08:30:00')
  }
}
</script>

<style scoped>
.panel-body >>> img{
    display: inline-block;
    height: auto;
    max-width: 100%;
}
hr{
    color: "#6f5499";
}
</style>
