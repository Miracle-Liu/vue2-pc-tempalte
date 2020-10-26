<!--
 * @Description:首页
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-26 14:46:03
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/views/Home.vue
-->

<template>
  <div class="home-box">

    <div class="panels f-bc">
      <div v-for="(item,i) in cards" :key="i" class="card f-cc">
        <img class="icon" src="" alt="">
        <div>
          <div class="num">{{ item.num }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      cards: [
        { num: 2000, desc: '内容总数' },
        { num: 180, desc: '人审量（篇）' },
        { num: 5, desc: '预警总数（条）' },
        { num: '85%', desc: '通过率' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-box{
  padding: 40px 20px;
  .panels{
    width: 100%;
    height: 160px;
    .card{
      @include border-r;
      width:25%;
      min-width: 300px;
      &:last-of-type{
        border: none;
      }
    }
    .icon{
      width: 68px;
      height: 68px;
      margin-right: 30px;
    }
    .num{
      opacity: 0.85;
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: #000000;
      line-height: 36px;
    }
    .desc{
      margin-top: 20px;
      opacity: 0.65;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #000000;
      line-height: 12px;
    }
  }
}

</style>
