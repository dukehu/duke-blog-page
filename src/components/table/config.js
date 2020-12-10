export const tableDefaultColumns = { // 默认配置列
  seq: { // 序号
    title: '序号',
    type: 'seq',
    width: 60,
    align: 'center',
    className: 'table-sep',
    fixed: 'left',
    sortable: false
  },
  checkbox: { // 选择
    title: '',
    type: 'checkbox',
    width: 80,
    align: 'center',
    fixed: 'left',
    sortable: false,
    className: 'table-row-checkbox'
  },
  radio: { // 单选
    title: '单选',
    type: 'radio',
    width: 60,
    align: 'center',
    fixed: 'left',
    sortable: false,
    className: 'table-row-radio'
  },
  optionRow: { // 操作
    title: '操作',
    field: 'optionRow',
    type: 'optionRow',
    editable: false,
    width: 150,
    align: 'center',
    fixed: 'right',
    sortable: false,
    className: 'table-row-option',
    cellRender: {
      type: 'cellRender', // renderEdit
      name: 'optionRow'
    }
  }
}
