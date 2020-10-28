<!--
 * @Description: 监管配置页面
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-28 11:27:56
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
          <el-input v-model="form.keyword" placeholder="搜索敏感词" prefix-icon="el-icon-search" @change="query" />
        </el-form-item>
      </el-form>
      <div class="section">
        <el-button icon="el-icon-plus" class="add-word-btn" @click="addSensitive">添加敏感词</el-button>
        <div class="words-box">
          <el-tag
            v-for="(tag,i) in tags"
            :key="i"
            closable
            @close="delTag(tag,i)"
          >
            {{ tag }}
          </el-tag>
        </div>
        <div class="btn">
          <el-button @click="cancelSensitive">取消</el-button>
          <el-button type="primary" @click="saveSensitive">保存</el-button>
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
    <el-dialog v-if="dialogFormVisible" :close-on-click-modal="false" title="添加关键词" :visible.sync="dialogFormVisible" @close="close">
      <el-form>
        <el-form-item label="关键词" prop="">
          <el-input v-model="words" type="textarea" :autosize="{ minRows: 10}" placeholder="请输入关键词，每行一条，支持批量添加" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="finish">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import { queryBlacklist, AddBlacklist, delBlacklist, queryWhitelist, AddWhitelist, delWhitelist } from '@/api/regulatoryConfiguration.js'
export default {
  components: { },
  data() {
    return {
      dialogFormVisible: false,
      options: [
        { label: '白名单', value: 1 },
        { label: '黑名单', value: 2 }
      ],
      tagsCopy: [],
      tags: [
      ],
      form: {
        keyword: ''
      },
      value: 1,
      words: '',
      operator: {
        b: {
          add: [],
          del: []
        },
        w: {
          add: [],
          del: []
        }

      }
    }
  },
  computed: {},
  watch: {
    value(v) {
      if (v === 1) {
        this.queryWhitelist()
      } else {
        this.queryBlacklist()
      }
    }
  },
  created() {
    this.queryWhitelist()
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
    delTag(item, i) {
      this.tags.splice(i, 1)
      if (this.value === 1) {
        const del = this.operator.w.del
        del.push(item)
        this.operator.w.del = this.$_.uniq(del)
      } else {
        const del = this.operator.b.del
        del.push(item)
        this.operator.b.del = this.$_.uniq(del)
      }
    },
    finish() {
      const x = this.words.split('\n').map((x) => x.trim())
      if (x.length > 0) {
        this.tags = [...this.tags, ...x]
        if (this.value === 1) {
          let add = this.operator.w.add
          add = [...add, ...x]
          this.operator.w.add = this.$_.uniq(add)
        } else {
          let add = this.operator.b.add
          add = [...add, ...x]
          this.operator.b.add = this.$_.uniq(add)
        }
        this.close()
      } else {
        this.$notify({
          title: '添加失败',
          message: '请填写关键词',
          type: 'error'
        })
      }
    },
    addSensitive() {
      this.dialogFormVisible = true
    },
    query() {
      if (this.value === 1) {
        this.queryWhitelist(this.form)
      } else {
        this.queryBlacklist(this.form)
      }
    },
    close() {
      this.words = ''
      this.dialogFormVisible = false
    },
    cancelSensitive() {
      this.resetQuery()
      this.$message.success('操作成功')
    },
    resetQuery() {
      this.value = 1
      this.operator = {
        b: {
          add: [],
          del: []
        },
        w: {
          add: [],
          del: []
        }

      }
      this.tags = this.$_.deepClone(this.tagsCopy)
    },
    async saveSensitive() {
      // 白名单
      if (this.value === 1) {
        const { add, del } = this.operator.w
        await Promise.all([AddWhitelist({ words: add }), delWhitelist({ words: del })])
      } else {
        // 黑名单
        const { add, del } = this.operator.b

        await Promise.all([AddBlacklist({ words: add }), delBlacklist({ words: del })])
      }
      this.$message.success('保存成功')
    },
    async AddBlacklist() {
      await AddBlacklist()
    },
    async queryWhitelist(query) {
      const { results } = await queryWhitelist(query)
      this.tags = results
    },
    async queryBlacklist(query) {
      const { results } = await queryBlacklist(query)
      this.tags = results
    }
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
  margin-bottom: 28px;
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
