<!--
 * @Description:layout
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 14:24:23
 * @LastEditTime: 2020-10-24 15:07:05
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/Layout/index.vue
-->
<template>
  <div class="layout-box">
    <Header />
    <div class="contents-box">
      <LeftNav>
        <router-view class="right-panel" />
      </leftnav>
    </div>

  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import LeftNav from '@/components/LeftNav.vue'
export default {
  name: 'Layout',
  components: {
    Header,
    LeftNav
  }
}
</script>

<style lang="scss">
    .layout-box{
        width: 100%;
        height: 100%;
        .contents-box{
            width: 100%;
            height: calc(100% - 100px);
            display: flex;
            .right-panel{
                flex: 1;
                height: 100%;
            }
        }

    }
</style>
