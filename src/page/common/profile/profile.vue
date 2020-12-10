//  个人中心
<template>
    <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
            <el-card class="box-card" style="height: 340px">
                <div style="text-align: center">
                    <div class="block"><el-avatar :size="80" :src="user.avatar"></el-avatar></div>
                    <div class="block">123321</div>
                    <div class="block">123321</div>
                    <div class="block">123321</div>
                </div>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <el-card class="box-card" style="height: 640px">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="文章列表" name="articleList">
                      <el-row :gutter="10">
                        <el-col :span="12" v-for="article in articles" :key="article.id" >
                          <el-card style="height: 200px" class="box-card">
                            <div slot="header" class="clearfix">
                              <span>{{article.title}}</span>
                              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div class="text item">
                              {{ article.summary }}
                            </div>
                          </el-card>
                        </el-col>
                      </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      user: {},
      activeName: 'articleList',
      articles: []
    }
  },
  methods: {
    mountedInit () {
      this.getArticles()
    },
    // 获取文章列表
    getArticles () {
      this.$axios('GET', '/api/blog/blog_article', {})
        .then(res => {
          if (res.status === 200) {
            this.articles = res.data.list
          } else {

          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {},
  mounted () {
    this.mountedInit()
  }
}
</script>
