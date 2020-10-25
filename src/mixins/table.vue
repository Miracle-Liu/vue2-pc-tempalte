<!--
 * @Description:  table 公用
 * @Features:
 * @Author: Miri
 * @Date: 2020-08-13 18:06:33
 * @LastEditTime: 2020-10-25 15:24:17
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/mixins/table.vue
-->

<!-- table -->
<template>
  <div class />
</template>

<script>
import _ from 'lodash'

export default {
  components: {},
  props: {},
  data() {
    return {
      pageSizes: [30, 50, 100, 150, 200, 300],
      pageSize: 30,
      currentPage: 1,
      layout: 'sizes, prev, pager, next',
      parmas: {
        offset: 0,
        limit: 30
      },
      tableData: [],
      total: 0,
      fetcher: null
    }
  },
  computed: {
    StorePubPermission() {
      return this.$store.state.StorePubPermission
    },
    StoreTopSortSettings() {
      return this.$store.state.topActionButtons.StoreTopSortSettings
    },
    StoreTopFilterResult() {
      return this.$store.state.topActionButtons.StoreTopFilterResult
    },
    StoreTopDownloadExcel() {
      return this.$store.state.topActionButtons.StoreTopDownloadExcel
    },
    StoreViewSwitch() {
      return this.$store.state.StoreViewSwitch
    }
  },
  watch: {
    pageSize(v) {
      this.parmas.limit = v
    },
    currentPage(v) {
      this.parmas.offset = this.pageSize * (this.currentPage - 1)
    },
    StoreTopSortSettings: {
      deep: true,
      handler(v) {
        this.parmas = _.deepClone({}, this.parmas, v)
        this.parmas.offset = 0
        this.parmas = _.omitBy(this.parmas, (v) => { return _.isUndefined(v) || _.isNull(v) })
        this.fetchData()
      }
    },
    StoreTopFilterResult: {
      deep: true,
      handler(v) {
        this.parmas = _.deepClone({}, this.parmas, v)
        this.parmas.offset = 0
        this.parmas = _.omitBy(this.parmas, (v) => { return _.isUndefined(v) || _.isNull(v) })
        this.fetchData()
      }
    }
  },
  created() {
    const end = new Date()
    const start = new Date()
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
    this.parmas.time_from = Math.floor(start.getTime() / 1000)
    this.parmas.time_to = Math.floor(end.getTime() / 1000)
    this.fetchData()
  },
  mounted() {
    this.StoreTopAction.map(v => {
      this.$store.commit(v, this.name)
    })
  },
  beforeDestroy() {
    this.StoreTopAction.map(v => {
      this.$store.commit(v, false)
    })
  },
  methods: {
    dateFormatter(value) {
      if (!value) return '-'
      if (value === '-') return value
      if (typeof value === 'number' && String(value).length === 10) {
        value = value * 1000
      }
      const date = new Date(value)
      const now = new Date(new Date().setHours(0, 0, 0, 0))
      if (
        now.getFullYear().toString() +
      now.getMonth().toString() +
      now.getDate().toString() !==
    date.getFullYear().toString() +
      date.getMonth().toString() +
      date.getDate().toString()
      ) {
        return (
          date.getFullYear() +
      '年' +
      (date.getMonth() + 1) +
      '月' +
      date.getDate() +
      '日 '
        )
      } else {
        return (
          '今天 ' +
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
        )
      }
    },
    processData(message) {
      if (message) {
        const { data, count } = message
        if (Array.isArray(data)) {
          this.tableData = data
        } else {
          this.tableData = []
        }
        if (count) {
          this.total = count
        }
      }
    },

    handleCurrentChange(v) {
      this.parmas.offset = this.pageSize * (this.currentPage - 1)
      this.fetchData()
    },
    handleSizeChange(v) {
      this.parmas.limit = v
      this.currentPage = 1
      this.parmas.offset = this.pageSize * (this.currentPage - 1)
      this.fetchData()
    }

  }
}
</script>
<style lang='scss' scoped>
.pagination {
  height: 80px;
  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
}
.table-data-section {
  height: calc(100% - 65px);
  width: 100%;
}
.table-data-scrollbar {
  height: calc(100% - 200px);
  width: 100%;
}
.custom-table {
  width: fit-content;
  max-width: none;
  min-width: 100%;
}
// .el-table__body-wrapper{
//   height:calc(100% - 80px);
// }
// .el-table__footer-wrapper{
//   position: fixed;
//   bottom: 80px;
// }
</style>
