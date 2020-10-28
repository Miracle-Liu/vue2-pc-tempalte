/*
 * @Description: config
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 16:57:54
 * @LastEditTime: 2020-10-28 11:00:26
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
  },
  devServer: {
    port: 8088,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/v1': {
        target: 'https://demo.arm.autops.xyz/',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': 'v1'
        }
      }
    }
  }
}
