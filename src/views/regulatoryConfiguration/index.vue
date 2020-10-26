<!--
 * @Description: 监管配置页面
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-26 14:27:33
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
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
          >
            {{ tag.name }}
          </el-tag>
        </div>
      </div>

    </div>

    <div class="report-box ">
      <div class="section">
        <div class="title">
          风险报告
        </div>
        <div class="info-box">
          在<el-input v-model.number="day" type="number" placeholder="" style="width:100px" size="small" />天内该用户被驳回达到<el-input v-model.number="time" type="number" placeholder="" style="width:100px" size="small" /> 次时，系统可对该用户发送风险报告。
        </div>
        <div class="report">
          <div class="title" />
          <el-input v-model="reorpt" type="textarea" placeholder="请输入风险报告提醒内容" />
        </div>
        <div class="btn">
          <el-button>取消</el-button>
          <el-button type="primary">保存</el-button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  components: { },
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
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
<style lang='scss' >
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
      margin: 20px 0;
      @include border($s:dashed);
      border-radius: 2px;
    }
  }
.words-box{
  margin-bottom: 20px;
  width: 100%;
  padding: 20px 10px;
  @include border($s:dashed);
  .el-tag {
    margin-right: 10px;
  }
}
.btn{
  margin-top: 20px;
  text-align: right;
}
  .section{
    width: 80%;
    min-width: 845px;
  }
  .report-box{
    padding: 20px 48px 0;

    }
  .info-box{
    .el-input__inner{
      border: none;
      @include border-b;
    }
  }
}
</style>
