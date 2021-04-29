/**
 * 
 * 
 * 
 **/
'use strict'
const Export = {}
/**
 * 数组求和
 */
Export.sum = (array) => {
  const len = array.length
  if (len === 0) {
    return 0
  } else if (len === 1) {
    return array[0]
  } else {
    return array[0] + Export.sum(array.slice(1))
  }
}
/**
 * 数组比对筛选
 */
Export.filter = (array, point) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    for (let j = 0; j < item.val.length; j++) {
      if (JSON.stringify(item.val[j]) === JSON.stringify(point)) {
        return item.key
      }
    }
  }
}
/**
 * 数组最大值
 */
Export.max = (arr) => {
  let max = JSON.parse(arr[0])
  for (let i = 0; i < arr.length - 1; i++) {
    max = max < JSON.parse(arr[i + 1]) ? JSON.parse(arr[i + 1]) : max
  }
  return max
}
/**
 * 数组最小值
 */
Export.min = (arr) => {
  let min = JSON.parse(arr[0])
  for (let i = 0; i < arr.length - 1; i++) {
    min = min > JSON.parse(arr[i + 1]) ? JSON.parse(arr[i + 1]) : min
  }
  return min
}
/**
 * 数组最大值+长度系数（用于柱状图，折线图刻度值）
 */
Export.max_min = (arr) => {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    max = max < arr[i + 1] ? arr[i + 1] : max
    min = min > arr[i + 1] ? arr[i + 1] : min
  }
  max = Math.ceil(max)
  min = Math.floor(min)
  // 坐标轴纵向座标刻度为6
  // const itemScale = max / 6
  // 最大值
  // max = (typeof max === Number) ? max : parseInt(max)
  // min = (typeof min === Number) ? min : parseInt(min)
  // max = (max + itemScale).toFixed(0)
  // min = (min-itemScale<0)?0:(min-itemScale).toFixed(0)
  return { max, min }
}
/**
 *  数组平均值
 */
Export.average = (array) => {

}
/**
 * 数组排序
 * @array Array 数组
 * @attr String 属性
 * @rev Boolean 排序方式 default: true(👆)
 */
Export.sortCompare = (array, attr, rev) => {
  function compare (attr) {
    if (rev === undefined) {
      rev = 1
    } else {
      rev = (rev) ? 1 : -1
    }

    return function (a, b) {
      a = a[attr]
      b = b[attr]
      if (a < b) {
        return rev * -1
      }
      if (a > b) {
        return rev * 1
      }
      return 0
    }
  }
  return array.sort(compare(attr))
}
export default Export
