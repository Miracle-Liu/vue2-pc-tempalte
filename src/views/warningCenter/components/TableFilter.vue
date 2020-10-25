<!--
 * @Description: table filter
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-25 14:44:30
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/views/warningCenter/components/TableFilter.vue
-->
<!--  -->
<template>
  <div class="warning-center-filter-box">
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
      <div>
        <el-form-item label="选择时间">
          <el-date-picker
            v-model="datetimes"
            :default-time="defaultTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            value-format="timestamp"
          />
        </el-form-item>
      </div>

    </el-form>
  </div>
</template>

<script>
import { datePicker } from '@/mixins/datePicker.js'
export default {
  components: {},
  mixins: [datePicker],
  data() {
    return {
      value: '',
      options: [],
      form: {

      }
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

</style>
