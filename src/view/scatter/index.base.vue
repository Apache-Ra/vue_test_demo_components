<template>
    <section class='scatterChart'>
        <div class="chart" :id="this.chartData.id"></div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import Echarts from 'echarts'

const mockData = [
  {name: '格力', year: 25, number: 56},
  {name: '美的', year: 25, number: 50},
  {name: '海尔', year: 25, number: 55},
  {name: '志高', year: 10, number: 30},
  {name: '长虹', year: 15, number: 40},
  {name: '扬子', year: 10, number: 30},
  {name: '松下', year: 10, number: 30},
  {name: '大金', year: 10, number: 30},
  {name: 'TCL', year: 10, number: 30},
  {name: '奥克斯', year: 20, number: 45},
  {name: '三菱重工', year: 10, number: 30},
]
export default {
  name: 'pieChartBar',
  title: '',
  inject: ['reload'],
  components: {},
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    }),
  },
  props: {
    chartData: {
      type: Object,
      twoWay: true,
      default: () => ({
        id: 'default_chartData',
        xAxisData: ['--', '--', '--'],
        seriesData: [0, 0, 0],
      }),
    },
  },
  data() {
    return {
      test: '',
    }
  },
  created() {
  },
  updated() {
    let vue = this
    vue.$nextTick(function () {
      vue.initChart(vue.chartData.id)
    })
  },
  mounted() {
    let vue = this
    vue.$nextTick(function () {
      vue.initChart(vue.chartData.id)
    })
  },
  methods: {
    // 格式化数据
    formatData(data) {
      let xAxisData = []
      let seriesData = []
      let yearArray = []
      let numberArray = []
      data.forEach((item, index) => {
        yearArray[index] = item.year
        numberArray[index] = item.number
        xAxisData.push(item.name)
      })
      const seriesPublic = {
        type: 'scatter',
        smooth: true,
        symbol: 'circle',
        symbolSize: (value, index) => {
          return value / 2
        },
        markPoint: {
          itemStyle: {
            normal: {
              borderColor: '#1e90ff',
              borderWidth: 1,
              label: {
                show: true
              }
            }
          },
          data: [
            {type: 'min', name: '最小值', value: '22'}
          ]
        },
      }
      let seriesYear = {
        name: '年限',
        em: '年',
        data: yearArray,
        itemStyle: {
          normal: {
            color: '#38f9d7',
            lineStyle: {
              color: 'rgba(255,0,0,0)',
            },
          }
        }
      }
      seriesYear = Object.assign(seriesYear, seriesPublic)
      let seriesNumber = {
        name: '数量',
        em: '个',
        data: numberArray,
        itemStyle: {
          normal: {
            color: '#00f2fe',
            lineStyle: {
              color: 'rgba(255,0,0,0)',
            }
          }
        }
      }
      seriesNumber = Object.assign(seriesNumber, seriesPublic)
      seriesData = [seriesYear, seriesNumber]

      return {xAxisData, seriesData}
    },
    // 渲染图表
    initChart(ID) {
      let vue = this
      vue.charts = Echarts.init(document.getElementById(ID))
      window.onresize = vue.charts.resize
      const data = vue.formatData(mockData)
      vue.charts.setOption({
        grid: {x: 80, y: 60, x2: 80, y2: 30, borderWidth: 1},
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}',
        },
        backgroundColor: '#FFF',
        xAxis: {
          name: '空调品牌',
          type: 'category',
          data: data.xAxisData,
        },
        yAxis: {
          type: 'value',
          // axisLabel: {
          //   formatter: '{value} (年/个)',
          // },
        },
        series: data.seriesData,
      })
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .scatterChart {
        width: 100%;
        height: 100%;

        .chart {
            width: 100%;
            height: 100%;
        }
    }
</style>
