export default {
  treeTable: {
    type: Boolean,
    default () {
      return false
    }
  },
  columns: { // 表格列
    type: Array,
    default () {
      return []
    }
  },
  tableData: { // 表格数据
    type: Array,
    default () {
      return []
    }
  },
  tableId: { // 表格id
    type: String,
    default () {
      return ''
    }
  },
  isServer: { // 数据是否从服务端请求
    type: Boolean,
    default () {
      return true
    }
  },
  serviceId: { // 微服务id
    type: String,
    default () {
      return ''
    }
  },
  path: { // 请求路径
    type: String,
    default () {
      return ''
    }
  },
  requestMethod: { // 请求方式
    type: String,
    default () {
      return 'GET'
    }
  },
  requestParams: { // 请求参数
    type: Object,
    default () {
      return {}
    }
  },
  pagerConfig: {
    type: Object,
    default () {
      return {pageSize: 5, total: 100, currentPage: 0, pageSizes: [5, 10, 15, 20]}
    }
  },
  checkboxConfig: {
    type: Object,
    default () {
      return {
      }
    }
  },
  treeConfig: {
    type: Object,
    default () {
      return {children: 'children', expandAll: true}
    }
  },
  seqConfig: { // 序号配置项
    startIndex: 1, // 设置序号的起始值 number0
    seqMethod ({ row, $rowIndex, rowIndex, column, columnIndex }) {
      return $rowIndex + 1
    }
  },
  checkBox: { // 表格数据单选还是复选
    type: Boolean,
    default () {
      return true
    }
  },
  buttons: { // 工具栏按钮
    type: Array,
    default () {
      return [
      ]
    }
  },
  tableCustom: {
    type: Object,
    default () {
      return {storage: true}
    }
  },
  showToolbar: { // 工具栏是否显示
    type: Boolean,
    default () {
      return true
    }
  },
  optionRow: { // 表格是否需要操作列
    type: Boolean,
    default () {
      return false
    }
  },
  tableConfig: {
    type: Object,
    default () {
      return {
        renderers: {
        }
      }
    }
  }
}
