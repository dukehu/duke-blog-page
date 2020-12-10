<template>
  <div style="width: 100%; height: 100%">
    <el-card v-if="showToolbar">
      <div style="width: 68%; float: left; text-align: left; margin-left: 5px; z-index: 1000; padding-top: 7px;">
        <slot name="toolbar">
        </slot>
      </div>
      <div style="width: 30%; float: right; margin-right: 5px">
        <vxe-toolbar
          v-if="showToolbar"
          :buttons="buttons"
          @button-click="buttonClick" />
      </div>
    </el-card>
    <vxe-grid
        id="xGridId"
        ref="xGrid"
        auto-resize
        ync-resize
        resizable
        border
        show-overflow
        round
        keep-source
        header-align="center"
        highlight-hover-row
        height="auto"
        class="mytable-scrollbar"
        :custom-config="tableCustom"
        :loading="loading"
        :data="tableDataIn"
        :columns="columnsIn"
        :pager-config="pagerConfig"
        :seq-config="seqConfig"
        :checkbox-config="checkboxConfig"
        :tree-config="treeConfig"
        @page-change="pageChangeHandle">
        <template v-slot:empty>
          <span style="color: red;">
            <p>没有更多数据了！</p>
          </span>
        </template>
    </vxe-grid>
  </div>
</template>

<script>
import tableColumnsConf from '@/columns/index.js'
import {tableDefaultColumns} from './config'
import props from './props'
const isPlainObject = obj => typeof obj === 'object' && obj !== null && Object.prototype.toString.call(obj) === '[object Object]'
export default {
  name: 'Table',
  props: {
    ...props
  },
  data () {
    return {
      // 工具栏配置
      columnsIn: this.columns,
      tableDataIn: this.tableData,
      loading: false,
      searchName: ''
    }
  },
  methods: {
    buttonClick (obj, e) {
      // 工具栏左侧按钮点击事件
      let self = this
      if (typeof (obj.button.callback) === 'function') {
        obj.button.callback(self, this.$refs.xGrid)
      }
    },
    // 获取选中数据
    getSelectionData () {
      return this.$refs.xGrid.getCheckboxRecords()
    },
    // 获取表格数据
    getTableDatas (page, size) {
      if (this.isServer) {
        this.loading = true
        if (size) {
          this.pagerConfig['pageSize'] = size
        }
        this.requestParams['page'] = 0
        this.requestParams['size'] = this.pagerConfig.pageSize
        if (page) {
          this.requestParams['page'] = page
        }
        this.$axios(this.requestMethod, this.path, this.requestParams).then(res => {
          if (res.status === 200) {
            this.pagerConfig['total'] = res.data.total
            this.pagerConfig['currentPage'] = page
            if (!this.treeTable) {
              this.tableDataIn = res.data.list
            } else {
              this.tableDataIn = res.data
            }
            this.loading = false
          } else {
            this.$XModal.message({ message: res.message, status: 'warning' })
            this.loading = false
          }
        })
          .catch(error => {
            console.log(error)
            this.loading = false
          })
      }
    },
    pageChangeHandle ({ type, currentPage, pageSize, $event }) {
      this.getTableDatas(currentPage, pageSize)
    },
    // 注册渲染器
    registTableRender (renderers) {
      for (let i in renderers) {
        this.$VXETable.renderer.add(i, renderers[i])
      }
    },
    // 刷新表格数据
    refresh () {
      this.getTableDatas()
    },
    extend () {
      let target = arguments[0] || {}
      let index = 1
      let deep = false
      if (typeof target === 'boolean') {
        deep = target
        index++
        target = arguments[1] || {}
      }
      if (typeof target !== 'object' && typeof target !== 'function') {
        target = {}
      }
      let len = arguments.length
      for (; index < len; index++) {
        let source = arguments[index]
        if (source !== null) {
          for (let k in source) {
            let src = target[k]
            let copy = source[k]
            if (copy === target) {
              continue
            }
            let isArray = Array.isArray(copy)
            if (deep && (isPlainObject(copy) || isArray)) {
              let clone
              if (isArray) {
                clone = src && Array.isArray(src) ? src : []
              } else {
                clone = src && isPlainObject(src) ? src : {}
              }
              target[k] = this.extend(deep, clone, copy)
            } else if (typeof copy !== 'undefined') {
              target[k] = copy
            }
          }
        }
      }
      return target
    }
  },
  created () {
    this.registTableRender(this.tableConfig.renderers)
    // this.getTableDatas()
  },
  mounted () {
  },
  watch: {
    tableId: {
      handler (newval) {
        let tableColumns = this.extend(true, [], tableColumnsConf(newval))
        tableColumns.push(tableDefaultColumns['seq'])
        if (this.checkBox) {
          tableColumns.push(tableDefaultColumns['checkbox'])
        } else {
          tableColumns.push(tableDefaultColumns['radio'])
        }
        if (this.optionRow) {
          tableColumns.push(tableDefaultColumns['optionRow'])
        }
        this.columnsIn = this.extend(true, [], tableColumns)
      },
      immediate: true
    },
    requestParams: {
      handler (newval) {
        this.getTableDatas()
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>
/*滚动条整体部分*/
.mytable-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar ::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar ::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #F1F1F1;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #A8A8A8;
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar ::-webkit-scrollbar-corner {
  background-color: #FFFFFF;
}

.vxe-button.type--button.theme--my-purple,
.vxe-button.type--button.theme--my-purple:hover {
  color: #fff;
}
.vxe-button.type--button.theme--my-purple {
  background-color: #800080;
}
.vxe-button.type--button.theme--my-purple:active {
  background-color: #a50aa5;
}
.my-green {
  color: #008000;
}
.my-primary {
  color: #3196ff;
}
.my-success {
  color: #67c23a;
}
.my-info {
  color: #909399;
}
.my-warning {
  color: #e6a23c;
}
.my-danger {
  color: #f56c6c;
}
.vxe-toolbar .vxe-button--wrapper {
  text-align: right;
  padding-right: 30px;
}
.el-card__body {
  padding: 0;
}
.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
  box-shadow: unset;
}
</style>
