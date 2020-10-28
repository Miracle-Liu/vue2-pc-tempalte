/*
 * @Description: 监管配置
 * @Features:
 * @Author: Miri
 * @Date: 2020-07-30 16:49:42
 * @LastEditTime: 2020-10-28 10:06:46
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/api/regulatoryConfiguration.js
 */
import request from '@/utils/request'

// 查询自定义黑词库
export function queryBlacklist(params) {
  return request({
    url: `/v1/approval/blacklist`,
    method: 'get',
    params
  })
}
// 添加词汇到黑词库
export function AddBlacklist(data) {
  return request({
    url: `/v1/approval/blacklist`,
    method: 'post',
    data
  })
}
// 从黑词库删除词汇
export function delBlacklist(data) {
  return request({
    url: `/v1/approval/blacklist`,
    method: 'PUT',
    data
  })
}
// 查询自定义白词库
export function queryWhitelist(params) {
  return request({
    url: `/v1/approval/whitelist`,
    method: 'get',
    params
  })
}
// 添加词汇到白词库
export function AddWhitelist(data) {
  return request({
    url: `/v1/approval/whitelist`,
    method: 'post',
    data
  })
}
// 从白词库删除词汇
export function delWhitelist(data) {
  return request({
    url: `/v1/approval/whitelist`,
    method: 'PUT',
    data
  })
}
