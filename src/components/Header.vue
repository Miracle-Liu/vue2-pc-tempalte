<!--
 * @Description: header
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 14:29:38
 * @LastEditTime: 2020-10-26 13:59:47
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/components/Header.vue
-->
<!-- 头部 -->
<template>
  <div class="header-box f-bc">
    <div class="left f-xc">
      <div class="logo">
        <img :src="logo" alt="">
      </div>
      <div class="system-name">
        内容监管平台
      </div>
    </div>
    <div class="right">
      <div class="head-icon" />
    </div>

  </div>
</template>

<script>
import logo from '@/assets/svg/logo.svg'
export default {
  components: {},
  data() {
    return {
      logo
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.header-box{
    width: 100%;
    height: 100px;
    padding: 0 40px;
    box-shadow: 0 2px 7px 0 rgba(190,190,190,0.50);
    .logo{
        width: 36px;
        height: 36px;
        background: #F3F1F3;
        border-radius: 1px;
        border-radius: 1px;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .system-name{
        margin-left: 18px;
opacity: 0.85;
font-family: PingFangSC-Medium;
font-size: 24px;
color: rgba(0,0,0,0.85);
line-height: 24px;
    }
    .head-icon{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

}
</style>
