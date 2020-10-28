<!--
 * @Description: 左侧导航栏
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-24 14:33:41
 * @LastEditTime: 2020-10-27 15:47:07
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/components/LeftNav.vue
-->
<!--  -->
<template>
  <div class="left-nav-box">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item v-for="(item,index) in navList" :key="index" :index="index+1" @click="jump(item,index)">
        <div class="f-xc">
          <i :class="['iconfont',item.icon,'icon']" />
          <span slot="title">{{ item.name }}</span>
        </div>
      </el-menu-item>
    </el-menu>
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
          icon: 'icongaikuangyuji',
          route: 'home'
        },
        {
          name: '预警中心',
          icon: 'iconyujing',
          route: 'warningCenter'
        },
        {
          name: '监管配置',
          icon: 'iconpeizhi',
          route: 'regulatoryConfiguration'
        },
        {
          name: '监管日志',
          icon: 'iconjianguan',
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
    .icon{
      margin-right: 20px;
    }
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
