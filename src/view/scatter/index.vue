<template>
    <section class='scatterChart'>
        <div class="chart" :id="this.chartData.id"></div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import Echarts from 'echarts'

const mockData = [
  {name: '格力', year: 25, number: 35},
  {name: '美的', year: 25, number: 10},
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
    // 渲染图表
    initChart(ID) {
      let vue = this
      vue.charts = Echarts.init(document.getElementById(ID))
      window.onresize = vue.charts.resize

      let hours = ['A','B','C','D'];
      let days = [10,20,30,40,50,60,70];
      let data = [
        [25],
        [10],
        [15],
        [20],
        [10],
        [10],
        [15]
      ]
      data = data.map(function (item) {
        if(item){
          return [item[1], item[0], item[2], item[3]]
        }
      })

      vue.charts.setOption({
        grid: {x: 80, y: 60, x2: 80, y2: 30, borderWidth: 1},
        backgroundColor: '#FFF',
        tooltip: {
          position: 'top',

        },
        xAxis: {
          type: 'category',
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed'
            }
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          data: days,
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: 'A',
            type: 'line',
            data: data[0],
          },
          {
            name: 'B',
            type: 'line',
            data: data[1],
          },
          {
            name: 'C',
            type: 'line',
            data: data[2],
          },
          {
            name: 'D',
            type: 'line',
            data: data[3],
          },
        ],
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
