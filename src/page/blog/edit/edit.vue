<!-- 写文章 -->
<template>
    <div class="panel panel-default">
        <div class="panel-body">
          <el-input style="width: 40%" placeholder="请输入内容" v-model="article.title" clearable />
          <el-select style="width: 29.5%" v-model="article.tag" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
            <el-option v-for="tag in tags" :key="tag.id" :label="tag.name" :value="tag.id" />
          </el-select>
          <el-select style="width: 29.5%" v-model="article.category" multiple filterable allow-create default-first-option placeholder="请选择文章类别">
            <el-option v-for="category in categories" :key="category.id" :label="category.name" :value="category.id" />
          </el-select>
          <mavon-editor
              style="z-index: 1;margin: 25px 0 25px 0px;min-height:490px;"
              @save="save"
              @imgAdd="imgAdd"
              ref="md"
              :ishljs="true"
              v-model="article.mdContent"/>
        </div>
        <div class="form-group panel-footer" style="float:right;width:100%; padding: 8px;">
            <a type="submit"
                class="btn btn-primary"
                @click="writeArticle(1)"
                style="border-radius: 20px;border: 0;float:right">
                <i class="fa fa-mail-forward fa-lg"></i>
                发布文章
            </a>
            <a type="submit"
                class="btn btn-default"
                @click="writeArticle(2)"
                style="border-radius: 20px;border: 0;float:right">
                <i class="fa fa-book fa-lg"></i>
                存草稿
            </a>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import Qs from 'qs'
export default {
  components: { mavonEditor },
  data () {
    return {
      tags: [],
      categories: [],
      article: {
        title: '',
        navigation: '',
        htmlContent: '',
        mdContent: '',
        labelIds: [],
        typeIds: [],
        isDraft: 1
      },
      articleId: ''
    }
  },
  methods: {
    toManager () {
      this.$router.push('/manager/')
    },
    save (mdContent, htmlContent) {
    },
    saveUpdate () {
      let md = this.$refs.md
      let navigation = this.getNavigation(md)
      let mdContent = md.d_value
      let htmlContent = md.d_render

      this.article.mdContent = mdContent
      this.article.htmlContent = htmlContent
      this.article.navigation = navigation
      this.$axios('PUT', '/api/blog/blog_article/update/' + this.articleId, this.article).then(res => {
        console.log(res.data)
      })
    },
    writeArticle (isDraft) {
      let md = this.$refs.md
      let navigation = this.getNavigation(md)
      let mdContent = md.d_value
      let htmlContent = md.d_render

      this.article.mdContent = mdContent
      this.article.htmlContent = htmlContent
      this.article.navigation = navigation
      this.article.isDraft = isDraft
      this.$axios('post', '/api/blog/blog_article', this.article).then(res => {
        console.log(res.data)
      })
    },
    getNavigation (md) {
      let reg = /^H[1-6]{1}$/
      let navigationContent = md.$refs.navigationContent
      navigationContent.innerHTML = md.d_render
      let nodes = navigationContent.children
      let navigationStr = ''
      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
          if (reg.exec(nodes[i].tagName)) {
            navigationStr += nodes[i].outerHTML
          }
        }
      }
      return navigationStr
    },
    saveType () {
      // if (this.category === '') {
      //   this.addType = false
      // } else {
      //   this.$axios('post', '/api/blog/blog_type', {
      //     name: this.category
      //   }).then(data => {
      //     this.addType = false
      //     this.getCategories()
      //   })
      // }
    },
    saveTag () {
      // if (this.tag === '') {
      //   this.addTag = false
      // } else {
      //   this.$axios('post', '/api/blog/blog_label', {
      //     name: this.tag
      //   }).then(data => {
      //     this.addTag = false
      //     this.getTags()
      //   })
      // }
    },
    imgAdd (pos, $file) {
      var _this = this
      let formData = new FormData()
      formData.append('file', $file)
      formData.append('serviceId', 'duke-blog')
      // 将图片上传到服务器.
      this.$axios('post', '/api/blog/upload', formData, false, true).then(data => {
        if (data.status === 200) {
          _this.$refs.md.$imglst2Url([[pos, data.data]])
        } else {
          console.log(data)
        }
      })
    },
    getTags () {
      this.$axios('get', '/api/blog/blog_label').then(data => {
        this.tags = data.data
      })
    },
    getCategories () {
      this.$axios('get', '/api/blog/blog_type').then(data => {
        this.categories = data.data
      })
    },
    getArticles (articleId) {
      this.$axios('get', '/api/blog/blog_article/' + articleId).then(data => {
        this.article = data.data
        let lableVMS = this.article.labelVMS
        let typeVMS = this.article.typeVMS
        let lableIds = []
        let typeIds = []
        if (lableVMS) {
          lableVMS.forEach(element => {
            lableIds.push(element.id)
          })
        }
        if (typeVMS) {
          typeVMS.forEach(element => {
            typeIds.push(element.id)
          })
        }
        this.article.labelIds = lableIds
        this.article.typeIds = typeIds
      })
    }
  },
  created () {
    this.getTags()
    this.getCategories()
    this.articleId = this.$route.params.id
    if (this.articleId !== undefined) {
      this.isEdit = true
      console.log('修改文章：' + this.articleId)
      this.getArticles(this.articleId)
    } else {
      this.isEdit = false
      console.log('写文章')
    }
  }
}
</script>

<style scoped>
</style>
