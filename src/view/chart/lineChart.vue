<template>
    <div class='lineChart'>
        <div class="chart" :id="this.chartData.id"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Echarts from 'echarts'
// import colorsList from '../../kit/color.config'
const colorsList = (key) => {
  const colors = [
    {one: '#0D6F7E', two: '#0FE2BD'},
    {one: '#A18F17', two: '#D0C036'},
    {one: '#094C69', two: '#05B5CF'},
  ]
  return colors[key]
}
export default {
  name: 'lineChartBar',
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
        seriesData: [
          {value: 30, name: 'AAA'},
          {value: 20, name: 'BBB'},
          {value: 10, name: 'CCC'},
        ],
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
    // 渲染图表
    initChart(ID) {
      let vue = this
      vue.charts = Echarts.init(document.getElementById(ID))
      window.onresize = vue.charts.resize

      vue.charts.setOption({
        grid: {x: 120, y: 60, x2: 40, y2: 30, borderWidth: 1},
        title: {
          text: '',
          subtext: '',
        },
        tooltip: {
          formatter: function (params) {
            let res = params[0].name + '<br/>学评为：'
            let texts = ''
            if (params[0].value === 100) {
              texts = '优秀'
            } else if (params[0].value > 90) {
              texts = '完美'
            } else if (params[0].value > 80) {
              texts = '良好'
            } else if (params[0].value > 70) {
              texts = '不错'
            } else if (params[0].value > 60) {
              texts = '还行'
            } else if (params[0].value > 50) {
              texts = '加油'
            } else if (params[0].value > 0) {
              texts = 'OVER'
            }
            res = res + texts
            return res
          },
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.37)',
            },
          },

        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        },
        yAxis: {
          axisLabel: {
            formatter: function (value) {
              const texts = []
              if (value > 90) {
                texts.push('完美')
              } else if (value > 80) {
                texts.push('良好')
              } else if (value > 70) {
                texts.push('不错')
              } else if (value > 60) {
                texts.push('还行')
              } else if (value > 50) {
                texts.push('加油')
              } else if (value < 50) {
                texts.push('OVER')
              }
              return texts
            },
          },
        },
        series: [{
          name: '第一学期',
          data: [85, 68, 70, 94, 55, 60],
          type: 'line',
          smooth: true,
        }],
      })
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .lineChart {
        width: 100%;
        height: 100%;

        .chart {
            width: 100%;
            height: 100%;
        }
    }
</style>
