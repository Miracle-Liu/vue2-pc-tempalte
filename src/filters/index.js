import Vue from 'vue'

// 定义全局的日期格式化过滤器 毫秒
Vue.filter('date-formatter', function(value) {
  if (!value) return '-'
  if (value === '-') return value
  if (typeof value === 'number' && String(value).length === 10) {
    value = value * 1000
  }
  let date = new Date(value)
  let now = new Date(new Date().setHours(0, 0, 0, 0))
  if (
    now.getFullYear().toString() +
      now.getMonth().toString() +
      now.getDate().toString() !==
    date.getFullYear().toString() +
      date.getMonth().toString() +
      date.getDate().toString()
  ) {
    return (
      date.getFullYear() +
      '年' +
      (date.getMonth() + 1) +
      '月' +
      date.getDate() +
      '日 '
    )
  } else {
    return (
      '今天 ' +
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    )
  }
})

Vue.filter('date-formatter-detail', function(value) {
  if (!value) return ''
  let date = new Date(value)
  return (
    date.getFullYear() +
    '年' +
    (date.getMonth() + 1) +
    '月' +
    date.getDate() +
    '日 ' +
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
    ':' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  )
})
// 定义全局的日期格式化过滤器 秒
Vue.filter('date-formatter-s', function(value) {
  if (!value) return ''
  let date = new Date(value * 1000)
  return (
    date.getFullYear() +
    '年' +
    (date.getMonth() + 1) +
    '月' +
    date.getDate() +
    '日 ' +
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
    ':' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  )
})
// 定义全局的文件大小转换过滤器
Vue.filter('filesize-converter', function(value) {
  if (!value) return ''
  let i = -1
  let byteUnits = [' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB']
  do {
    value = value / 1024
    i++
  } while (value > 1024)

  return value.toFixed(2) + byteUnits[i]
})
// 定义全局的秒转时分秒过滤器
Vue.filter('h-m-s', function(value) {
  value = parseInt(value) || 0
  var h = parseInt(value / 3600)
  var m = parseInt((value % 3600) / 60)
  var s = parseInt(value % 60)
  var ms = parseInt(parseFloat(value % 1) * 1000)

  function add0(a) {
    return a < 10 ? '0' + a : a
  }
  return add0(h) + ':' + add0(m) + ':' + add0(s)
})
// 定义全局的秒转分秒过滤器
Vue.filter('m-s', function(value) {
  value = parseInt(value) || 0
  var m = parseInt(value / 60)
  var s = parseInt(value % 60)

  function add0(a) {
    return a < 10 ? '0' + a : a
  }
  return add0(m) + ':' + add0(s)
})
// 定义全局的日期格式转换过滤器
Vue.filter('date-formatter-ymd', function(value) {
  if (!value) return ''
  let date = new Date(value)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
})
// 定义全局的日期格式转换过滤器, e.g. 12月7日 上午11:04
Vue.filter('date-formatter-mdhm', function(value) {
  if (!value) return ''
  let date = new Date(value)
  let hour = date.getHours()
  let timePeriod
  if (hour < 9) {
    timePeriod = '早上'
  } else if (hour < 12) {
    timePeriod = '上午'
  } else if (hour < 14) {
    timePeriod = '中午'
  } else if (hour < 18) {
    timePeriod = '下午'
  } else {
    timePeriod = '晚上'
  }
  return (
    date.getMonth() +
    1 +
    '月' +
    date.getDate() +
    '日 ' +
    timePeriod +
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
    ':' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  )
})
Vue.filter('date-formatter-myworkbench-header', function(value) {
  if (!value) return ''
  let date = new Date(value)
  let hour = date.getHours()
  let timePeriod
  if (hour < 9) {
    timePeriod = '早上'
  } else if (hour < 12) {
    timePeriod = '上午'
  } else if (hour < 14) {
    timePeriod = '中午'
  } else if (hour < 18) {
    timePeriod = '下午'
  } else {
    timePeriod = '晚上'
  }
  return (
    date.getFullYear() +
    '-' +
    parseInt(date.getMonth() + 1) +
    '-' +
    date.getDate() +
    '，' +
    timePeriod +
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
    ':' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  )
})
// 去除空格过滤器
Vue.filter('remove-whitespace', function(value) {
  return value.replace(/\s+/, '')
})
// 消息时间过滤器
Vue.filter('msg-date-formatter', function(value) {
  let now = new Date()
  let date = new Date(value)
  if (now.toDateString() === date.toDateString()) {
    let timePeriod
    let hour = date.getHours()
    if (hour < 9) {
      timePeriod = '早上'
    } else if (hour < 12) {
      timePeriod = '上午'
    } else if (hour < 14) {
      timePeriod = '中午'
    } else if (hour < 18) {
      timePeriod = '下午'
    } else {
      timePeriod = '晚上'
    }
    return (
      timePeriod +
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    )
  }
  return `${date.getMonth() + 1}月${date.getDate()}日`
})

Vue.filter('expired-date-formatter', function(value) {
  let date = new Date(value)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})

Vue.filter('substr-6', function(value) {
  let _dot = value.length > 6 ? '...' : ''
  return value.toString().substr(0, 6) + _dot
})
