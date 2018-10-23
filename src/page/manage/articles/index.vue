<template>
    <div class="panel panel-default">
      <div class="panel-heading" style="text-align:left; font-size:1.3em;font-weight:bold;">
        <i class="fa fa-book fa-fw"></i>文章
      </div>
      <div class="panel-body">
        <div class="panel panel-default article" v-for="article in pageInfo.list" :key="article.id">
          <div class="panel-body">
            <div class="operation">
              <a @click="toEdit(article.id)"><i class="fa fa-edit fa-lg"></i></a>
              <a @click="deleteArticle(article.id)"><i class="fa fa-trash-o fa-lg"></i></a>
            </div>
            <h1 style="font-size:1.6em; cursor:pointer">
                <a style="text-decoration: none; color: grey">{{article.title}}</a>
            </h1>
            <p style="color:grey;">
                {{article.summary}}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {},
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    getList(){
        this.$axios('get','/api/blog/blog_article',{
            page: this.currentPage,
            size: this.pageSize,
        }).then(data => {
            this.pageInfo = data.data;
        })
    },
    toEdit(id) {
      this.$router.push("/edit/" + id);
    },
    deleteArticle(id) {

    }
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>
.article {
  width: 45%;
  display: inline-block;
  border: 1px solid #d0e69c; 
  /* background: #d0e69c; */
  margin-right: 40px; 
  height: 130px;
  overflow:hidden;
}
.operation {
  float: right;
}
.operation > a{
  cursor: pointer;
}
</style>
