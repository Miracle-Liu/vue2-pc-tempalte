/*
 * @Description: lodash
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 11:54:35
 * @LastEditTime: 2020-10-28 10:31:09
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/plugins/lodash-plugin.js
 */
import lodash from 'lodash'
export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$_', {
      value: lodash
    })
  }
}
