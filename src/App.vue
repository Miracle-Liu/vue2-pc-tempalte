<!--
 * @Description: 入口页面
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 11:40:20
 * @LastEditTime: 2020-10-24 14:08:18
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/App.vue
-->
<template>
  <div id="app">
    <div class="main-view">
      <!-- 非登录页面路由视图 -->
      <transition name="fade-transform" mode="out-in">
        <router-view class="app-main" />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 1000px;
}
.main-view {
  height: 100%;
  overflow: hidden;
  &.hide-top {
    .app-top {
      display: none;
    }
  }
  .app-top {
    height: 64px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06),
      0 0px 12px 0 rgba(0, 0, 0, 0.14);
  }
  .app-main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &.show-tool-panel {
    width: calc(100% - 300px);
  }
}
</style>
