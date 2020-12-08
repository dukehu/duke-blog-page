<template>
    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" v-model="keyWord" placeholder="请输入关键字">
            <span style="cursor: pointer;" @click="search" class="input-group-addon"><i class="fa fa-search fa-lg"></i></span>
        </div>

        <div v-show="dialogShow" class="myDialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="input-group">
                        <input type="text" v-model="keyWord" class="form-control" placeholder="请输入关键字">
                        <span type="button" class="input-group-addon" style="cursor: pointer;" @click="dialogShow = false">
                            <i class="fa fa-close fa-lg"></i>
                        </span>
                    </div>
                    <div class="modal-body list-group"  style="height:350px;padding:0;">
                        <a href="#" class="list-group-item">
                            <h4 class="list-group-item-heading">
                                免费域名注册
                            </h4>
                            <p class="list-group-item-text">
                                您将通过网页进行免费域名注册。
                            </p>
                        </a>
                        <a href="#" class="list-group-item">
                            <h4 class="list-group-item-heading">24*7 支持</h4>
                            <p class="list-group-item-text">我们提供 24*7 支持。</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'siteSearch',
  data () {
    return {
      dialogShow: false,
      keyWord: ''
    }
  },
  methods: {
    search () {
      this.dialogShow = false
    }
  }
}
</script>

<style scoped>
.myDialog {
    z-index: 1000;
    position: absolute;
    width: 350px;
}
</style>
