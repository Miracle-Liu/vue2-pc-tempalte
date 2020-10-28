import axios from 'axios'
import { Notification } from 'element-ui'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_HOST, // api的base_url
  timeout: 30000, // 请求超时时间
  withCredentials: true
})

service.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (
      res.code === 0 ||
      res.Code === 0 ||
      res.code === 200 ||
      res.Code === 200 ||
      res.err_code === 0
    ) {
      return res
    } else {
      if (process.env.NODE_ENV !== 'production') {
        Notification({
          title: res.message || res.err_msg,
          message: response.request.responseURL,
          type: 'error',
          duration: 0
        })
      }
      if (res.code >= 1000) {
        let title = ''
        switch (res.code) {
          case 1001:
            title = '姓名重复'
            break
          case 10000:
            title = '您没有权限进行此操作'
            break
          case 10001:
            title = '资源正在编辑中，无法操作'
            break
          case 10002:
            title = '资源正在审核中，无法操作'
            break
          case 10003:
            title = '审批模版已被禁用'
            break
          case 10004:
            title = '绑定的审批模板中的审核人不在该资产库中，无法绑定'
            break
          case 10009:
            title = '该话题不支持此稿件类型'
            break
          case 10010:
            title = '文稿在该栏目已存在'
            break
          case 10011: {
            const mediaList = res.data || []
            const titleList = mediaList
              .map((v) => `《${v.title}》已加入过普通频道“${v.category_alias}”`)
              .join(';')
            title = `稿件${titleList}，不可重复加入`
            break
          }
          case 10015: {
            const mediaList = res.data || []
            const titleList = mediaList
              .map((v) => `《${v.title}》已加入过推荐频道“${v.category_alias}”`)
              .join(';')
            title = `稿件${titleList}，不可重复加入`
            break
          }
          case 10012:
            title = '已加入过其他话题，不可重复加入'
            break
          case 10013:
            title = '已有其他频道固定在该位置上，请另选位置固定'
            break
          case 10014:
            title = '已有其他话题固定在该位置上，请另选位置固定'
            break
          case 10016:
            title = '已有其他稿件固定在该位置上，请另选位置固定'
            break
          case 10017:
            title = res.message
            break
          case 100000:
            title = '该申请已处理'
            break
          default:
            title = '您没有权限进行此操作'
            break
        }
        Notification({
          // title: '错误',
          message: title,
          type: 'error',
          duration: 2000
        })
      }
      if (res.code === 401) {
        window.location.href = window.situoyun.env.BASE_ACCOUNT_HOST
      }
      return Promise.reject(res)
    }
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production') {
      Notification({
        title: '网络异常，请检查网络并刷新网页',
        type: 'error',
        duration: 0
      })
    }
    return Promise.reject(error)
  }
)

export default service
