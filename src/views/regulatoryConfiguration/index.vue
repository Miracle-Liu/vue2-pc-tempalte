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
      <div class="title">
        敏感词库
      </div>
      <el-form :model="form" :inline="true" class="from">
        <el-form-item label="">
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
          <el-input placeholder="搜索敏感词" prefix-icon="el-icon-search" />
        </el-form-item>
      </el-form>
      <div class="section">
        <el-button icon="el-icon-plus" class="add-word-btn">添加敏感词</el-button>
        <div class="words-box">
          ss
        </div>
      </div>

    </div>

    <div class="report-box section">
      <div class="title">
        风险报告
      </div>
      <div>
        在<el-input v-model.number="day" type="number" placeholder="" style="width:100px" size="small" />天内该用户被驳回达到<el-input v-model.number="time" type="number" placeholder="" style="width:100px" size="small" /> 次时，系统可对该用户发送风险报告。
      </div>
      <div class="report">
        <div class="title" />
        <el-input v-model="reorpt" placeholder="请输入风险报告提醒内容" />
      </div>
      <el-button>取消</el-button>
      <el-button type="primary">保存</el-button>
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
  .title{
    margin-bottom: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #000000;
  }
  .from{
    @include border-b
  }

  .sensitive-box{
    padding: 20px 48px 0;
    @include border-b;
    .add-word-btn{
      @include border($s:dash);
      border-radius: 2px;
    }
  }
  .section{
    width: 80%;
    min-width: 845px;
  }
  .report-box{
    padding: 20px 48px 0;

    }
  }
</style>
