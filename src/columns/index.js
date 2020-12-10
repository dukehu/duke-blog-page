const columns = {
}

export default function (tableId) {
  if (tableId) {
    // 用户上去哪区划
    return columns[tableId]
  } else {
    return null
  }
}
