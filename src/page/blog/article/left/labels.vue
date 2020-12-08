<template>
    <div class="panel panel-default">
        <div class="panel-heading" style="text-align:left">标签</div>
        <div style="padding: 14px;">
            <a v-for="data in datas"
                :key="data.id"
                :style="{ background: data.backgroundColor}"
                :title="data.name"
                @click="queryByTag(data.name)"
                >
                {{data.name}}
            </a>
        </div>
        <div v-show="datas.length <= 0" style="padding: 30px 0; text-align:center;">暂无分类</div>
    </div>
</template>

<script>
export default {
  name: 'd-label',
  props: {
    datas: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    queryByTag (tag) {
      this.$router.push('/tags/' + tag)
    }
  }
}
</script>

<style scoped>
a {
    border: 1px solid #ebebeb;
    padding: 2px 7px;
    color: #959595;
    font-size: 16px!important;
    line-height: 1.5em;
    display: inline-block;
    margin: 0 7px 7px 0;
    transition: all .2s;
    text-decoration: none;
    cursor: pointer;
}
</style>
