<!--
 * @Description: 左侧导航栏
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 14:33:41
 * @LastEditTime: 2020-10-24 16:05:28
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/components/LeftNav.vue
-->
<!--  -->
<template>
  <div class="left-nav-box">
    <div v-for="(item,index) in navList" :key="index" :class="['f-xc','nav-item',index===selectedIndex?'active':'']" @click="jump(item,index)">
      <div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      selectedIndex: 0,
      navList: [
        {
          name: '概况统计',
          icon: '',
          route: ''
        },
        {
          name: '预警中心',
          icon: '',
          route: 'warningCenter'
        },
        {
          name: '监管配置',
          icon: '',
          route: 'regulatoryConfiguration'
        },
        {
          name: '监管日志',
          icon: '',
          route: 'regulatoryLog'
        }
      ]

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
    jump(item, index) {
      this.selectedIndex = index
      this.$router.push({ name: item.route })
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.left-nav-box{
    width: 230px;
    height: 100%;
    box-shadow: 0 2px 7px 0 rgba(190,190,190,0.50);
    .nav-item{
        height: 40px;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #737373;
        cursor: pointer;
        padding: 0 30px;
        &.active{
            opacity: 0.1;
            background: #4886FF;
        }

    }
}
</style>
