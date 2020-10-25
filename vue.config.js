/*
 * @Description: config
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 16:57:54
 * @LastEditTime: 2020-10-25 17:57:57
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/vue.config.js
 */
'use strict'

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/css/mixin.scss";
        `
      }
    }
  }
}
