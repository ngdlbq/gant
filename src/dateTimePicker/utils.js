let formatter = null
const generateList = (length, type) => {
  return Array.from({length}, () => 0).map((i, index) => {
    index ++
    return {
      value: index,
      label: formatter(type, index)
    }
  })
}
/**
 * 生成月份数据
 */
const generateMonth = () => {
  return generateList(12, 'month')
}

/**
 * 根据年、月，生成相应的日期数据
 */
const generateDate = (year, month) => {
  const date = new Date(year, month, 0).getDate()
  return generateList(date, 'date')
}

/**
 * 生成日期数据（年、月、日）列表
 * @param {*} startY   开始年份
 * @param {*} endY   结束年份
 * @param {*} type   类型，date年月日、year-month年月
 * @param {*} format   选项格式化函数 (type, value) => value
 */
export const generate = (startDate, endDate, type, format = (type, value) => value) => {
  formatter = format
  let startY = startDate.getFullYear()
  const endY = endDate.getFullYear()
  const dis = startY <= endY ? 1 : -1

  const arr = Array.from({length: Math.abs(endY - startY) + 1}, () => ({}))
  const r = arr.map(item => {
    item.value = startY
    item.label = formatter('year', startY)
    item.children = generateMonth()
    type === 'date' && item.children.forEach(item => {
      item.children = generateDate(startY, item.value)
    })
    startY = startY + dis
    return item
  })
  return r
}