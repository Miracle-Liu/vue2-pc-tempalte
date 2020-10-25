<!--  -->
<template>
  <div class="warning-center-filter-box">
    <el-form :model="form">
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
      <el-form-item label="label">
        <el-input placeholder="" />
      </el-form-item>
      <el-form-item label="label">
        <el-date-picker type="datetime" placeholder="datetime" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
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
