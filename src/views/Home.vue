<!--
 * @Description:首页
 * @Features:
 * @Author: Miri
 * @Date: 2020-10-25 11:49:06
 * @LastEditTime: 2020-10-27 15:49:59
 * @LastEditors: Miri
 * @Maintainer: Miri
 * @Contributor: Miri
 * @FilePath: /green/src/views/Home.vue
-->

<template>
  <VuePerfectScrollbar class="home-box">

    <div class="panels f-bc">
      <div v-for="(item,i) in cards" :key="i" class="card f-cc">
        <img class="icon" :src="item.icon" alt="">
        <div>
          <div class="num">{{ item.num }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div class="section s-1">
      <div class="top-bar f-bc">
        <div class="l-t">
          平台内容动态（每日数）</div>
        <div>
          <el-button round size="mini">刷新</el-button>
        </div>
      </div>
      <div class="info">
        <span>今日</span>
        <span class="t1">50</span>
        <span>昨日同比</span>
        <span class="t2">+500</span>
      </div>
      <div id="canvas" class="canvas" />
    </div>
    <div class="table f-bc">
      <div class="section s-2">
        <div class="top-bar f-bc">
          <div class="l-t">
            人审量行榜</div>
          <div>
            <el-button round size="mini">本月</el-button>
            <el-button round size="mini"> 上月</el-button>
          </div>
        </div>
        <div class="tb">
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="排名"
              width="180"
            />
            <el-table-column
              prop="name"
              label="审核人"
              width="180"
            />
            <el-table-column
              prop="address"
              label="人审量"
            />
            <el-table-column
              prop=""
              label=""
            >
              <template slot-scope="">
                <el-progress :show-text="false" :percentage="50" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="section s-3">
        <div class="top-bar f-bc">
          <div class="l-t">
            人审效率排行榜</div>
          <div>
            <el-button round size="mini">本月</el-button>
            <el-button round size="mini"> 上月</el-button>
          </div>
        </div>
        <div class="tb">
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="排名"
              width="180"
            />
            <el-table-column
              prop="name"
              label="审核人"
              width="180"
            />
            <el-table-column
              prop="address"
              label="效率（篇/小时）"
            />
            <el-table-column
              prop=""
              label=""
            >
              <template slot-scope="">
                <el-progress :show-text="false" type="circle" :percentage="50" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="b-box f-bc">

      <div class="section s-4">
        <div class="top-bar f-bc">
          <div class="l-t">
            预警统计</div>
          <div>
            <el-button round size="mini">本月</el-button>
            <el-button round size="mini">上月</el-button>
          </div>
        </div>
        <div id="canvas1" class="canvas" />
      </div>

      <div class="section s-5">
        <div class="top-bar f-bc">
          <div class="l-t">
            关键词云图</div>
        </div>
        <div id="wordcloud" class="canvas" />
      </div>

    </div>
  </VuePerfectScrollbar>
</template>

<script>

import * as echarts from 'echarts/lib/echarts'
// 引入折线图
require('echarts/lib/chart/line')
// 引入柱状图
require('echarts/lib/chart/bar')

// 引入饼状图
require('echarts/lib/chart/pie')

require('echarts/lib/component/tooltip')
require('echarts/lib/component/axis')
require('echarts/lib/component/legend')

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      list: [['foo', 30], ['bar', 16]],
      tableData: [{
        date: '1',
        name: '王小虎',
        address: '9950'
      }, {
        date: '2',
        name: '冯洋',
        address: '9950'
      }
      ],
      pieCharts: null,
      lineCharts: null,

      cards: [
        { num: 2000, desc: '内容总数', icon: require('@/assets/svg/contetnts.svg') },
        { num: 180, desc: '人审量（篇）', icon: require('@/assets/svg/people.svg') },
        { num: 5, desc: '预警总数（条）', icon: require('@/assets/svg/warning.svg') },
        { num: '85%', desc: '通过率', icon: require('@/assets/svg/pass.svg') }
      ],
      chartData: {
        'line': {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['内容数', '预警内容'],
            bottom: 0,
            right: 30
          },
          color: ['#36AD9F', '#19DBC0'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月8日', '10月9日', '10月10日', '10月11日', '10月12日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '内容数',
              type: 'line',
              stack: '内容数',
              data: [30, 50, 100, 150, 200, 230, 300, 270, 160, 100, 50, 20]
            },
            {
              name: '预警内容',
              type: 'line',
              stack: '预警内容',
              data: [20, 40, 100, 120, 180, 200, 230, 270, 140, 90, 30, 20]

            }
          ]
        },
        pie: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {d}%'
          },
          color: ['#00BEA8', '#03625B'],
          legend: {
            orient: 'vertical',
            // x: 'left', // 在水平方向legend靠右
            y: 'center', // 在竖直方向legend在上面
            // left: 300,
            right: 15,
            bottom: 'center',
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 30,
            icon: 'circle',
            data: ['预警', '非预警']
          },
          series: [
            {
              name: '预警统计',
              type: 'pie',
              center: ['40%', '50%'],
              radius: ['50%', '70%'],
              selectedMode: 'single',
              avoidLabelOverlap: false,
              label: {
                normal: {
                  formatter: '{d}%',
                  textStyle: {
                    color: 'rgba(0, 0, 0, 0.85)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.45)'
                  }
                }
              },
              data: [
                { value: 0, name: '预警' },
                { value: 0, name: '非预警' }
              ]
            }
          ]
        }
      }
    }
  },
  created() {

  },
  mounted() {
    // window.addEventListener('resize', () => {
    //   if (this.lineCharts && this.pieCharts) {
    //     this.lineCharts.resize()
    //     this.pieCharts.resize()
    //   }
    // })
    this.initLineCharts()
    this.initPieCharts()
    this.initWordCloud()
  },
  beforeDestroy() {
    // window.removeEventListener('resize')
  },
  methods: {
    initLineCharts() {
      this.lineCharts = echarts.init(document.getElementById('canvas'))
      this.lineCharts.setOption(this.chartData.line)
    },
    initPieCharts() {
      this.pieCharts = echarts.init(document.getElementById('canvas1'))
      this.pieCharts.setOption(this.chartData.pie)
    },
    initWordCloud() {
      this.pieCharts = window.WordCloud(document.getElementById('wordcloud'), { list: this.list })
    }

  }
}
</script>

<style lang="scss" >
.home-box{
  margin-top: 10px;
  padding: 40px 20px;
  .panels{
    width: 100%;
    height: 160px;
    background: #FFFFFF;
    border: 1px solid #E9ECF2;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.05);
    border-radius: 8px;
    border-radius: 8px;

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
  .canvas {
    width: 100%;
    min-height: 300px;
  }
  .top-bar{
    background: #FFFFFF;
    border: 1px solid #F3F3F3;
    border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0px 0px;
    height: 54px;
    padding:0  40px;
    .l-t{
      opacity: 0.85;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #000000;
      line-height: 16px;
    }
  }
  .section{
    margin-top: 30px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    border-radius: 4px;
  }
  .s-1{
    padding-bottom: 30px;
    .info{
    padding-top: 60px;
      text-align: right;
      padding-right: 70px;
      opacity: 0.85;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000000;
      line-height: 12px;
      .t1{
font-family: PingFangSC-Semibold;
font-size: 30px;
color: #36AD9F;
line-height: 36px;
margin-left: 30px;
margin-right: 100px;
      }
      .t2{
margin-left: 30px;
opacity: 0.85;
font-family: PingFangSC-Medium;
font-size: 30px;
color: #FD3745;
line-height: 36px;
      }
    }
  }
  .table{
    .section{
      width: 48%;
      min-width:54px ;
      float: left;
    }
    .s-3{
      float: right;
    }
    .tb{
      padding: 20px 20px 0;
    }
  }
  .b-box{
    .section{
      width: 48%;
      min-width:54px ;
      float: left;
    }

  }
  .el-progress.el-progress--circle{
    .el-progress-circle{
      width: 40px !important;
      height: 40px !important;
    }
  }
  .el-table__row{
    height: 71px;
    min-height: 71px;
    &:last-of-type{
      border: none;
    }
  }
}

</style>
