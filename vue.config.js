/*
 * @Description: config
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 16:57:54
 * @LastEditTime: 2020-10-28 16:05:24
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/vue.config.js
 */
'use strict'
const webpack = require('webpack')
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}
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
    port: defaultSettings.port,
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
  },
  configureWebpack: {
    name: defaultSettings.title,
    externals: {
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // axios: 'axios',
      // 'element-ui': 'ELEMENT',
      // 'echarts': 'echarts',
      // 'vue-echarts': 'VueECharts',
      // 'jquery': 'jquery',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
      // new BundleAnalyzerPlugin()
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
