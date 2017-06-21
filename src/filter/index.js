// 时间格式化插件
import moment from 'moment'
export default {
  timeFormat: addTime => {
    return moment(addTime).format('YYYY-MM-DD hh:mm:ss')
  },
  dateFormat: addTime => {
    return moment(addTime).format('YYYY-MM-DD')
  },
  toDay: time => {
    if (time > 2592000000) {
      return Number.parseInt(time / (1000 * 3600 * 24 * 30)) + '个月前'
    }
    if (time < 2592000000 && time >= 86400000) {
      return Number.parseInt(time / (1000 * 3600 * 24)) + '天前'
    }
    if (time < 86400000 && time >= 3600000) {
      return Number.parseInt(time / (1000 * 3600)) + '个小时前'
    }
    if (time < 3600000) {
      return Math.ceil(time / (1000 * 60)) + '分钟前'
    }
  }
}
