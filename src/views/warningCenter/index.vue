<!--
 * @Description:预警中心
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-25 16:40:44
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/views/warningCenter/index.vue
-->
<!--  -->
<template>
  <div class="warning-center-box ">
    <div class="head-title">预警中心</div>
    <div class="contents table-data-section">

      <TableFilter />
      <VuePerfectScrollbar class="table-data-scrollbar">

        <el-table
          ref="filterTable"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="内容类型"
            width="180"
            column-key="date"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          />
          <el-table-column
            prop="address"
            label="预警时间"
            :formatter="formatter"
          />
          <el-table-column
            prop="tag"
            label="内容状态"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{ scope.row.tag }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="tag"
            label="预警状态"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{ scope.row.tag }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="tag"
            label="操作"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{ scope.row.tag }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </vueperfectscrollbar>
    </div>
    <div class="pagination">
      <el-pagination hide-on-single-page :total="total" :page-sizes="pageSizes" :page-size.sync="pageSize" :current-page.sync="currentPage" :layout="layout" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import TableFilter from './components/TableFilter.vue'
import table from '@/mixins/table.vue'
export default {
  components: { TableFilter },
  mixins: [table],
  data() {
    return {
      tableData: []
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
    filter() {

    },
    filterHandler() {

    },
    filterTag() {

    },
    formatter() {

    }
  }
}
</script>
<style lang='scss' >
.warning-center-box{
  padding-right: 30px;
  .head-title{
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #464646;
    letter-spacing: 0;
    text-align: left;
    padding: 0 30px;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .contents{
    padding-left:20px ;
    padding-top: 20px;
  }
}
</style>
