<!--
 * @Description: 监管配置页面
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-26 09:48:22
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/views/regulatoryConfiguration/index.vue
-->
<!--  -->
<template>
  <div class="regulatory-configuration-box">

    <div class="sensitive-box">
      <div class="section-title">
        敏感词库
      </div>
      <el-form :model="form" :inline="true">
        <div>
          <el-form-item label="预警类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="请输入姓名、用户名" prefix-icon="el-icon-search" />
          </el-form-item>
        </div>
      </el-form>

    </div>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

      form: {},
      options: []
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
.regulatory-configuration-box{
  .sensitive-box{
    padding: 20px 48px 0;
    @include border-b
  }
}
</style>
