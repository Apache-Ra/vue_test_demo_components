<template>
    <section class='specialBarChart' :id="this.chartData.id"></section>
</template>

<script>
import {mapState} from 'vuex'
import Echarts from 'echarts'

export default {
  name: 'specialBarChart',
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
          {name: '----', value: 10},
          {name: '----', value: 20},
          {name: '----', value: 30},
          {name: '----', value: 20},
          {name: '----', value: 10},
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

      const list = [{
        name: '黄浦区',
        value: 111
      }, {
        name: '徐汇区',
        value: 222
      }, {
        name: '长宁区',
        value: 333
      }, {
        name: '静安区',
        value: 444
      }, {
        name: '普陀区',
        value: 555
      }];
// const data = ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区'];
      const values = [111,222,333,444,555];
      const labelSetting = [''];
      vue.charts = Echarts.init(document.getElementById(ID))
      window.onresize = vue.charts.resize
      vue.charts.setOption({
        grid: {
          containLabel: true,
          left: 100,
          top: 0,
          right: 150,
          bottom: 0,
        },
        xAxis: [{
          data: ['A', 'B', 'C'],
          inverse: true,
          axisLine: {show: false},
          axisTick: {show: false},
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: '#fff',
            },
          },
        }],
        yAxis: {
          max: 1000,
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          axisLine: {show: false},
        },
        series: [{ //内
          type: 'bar',
          barWidth: 30,
          legendHoverLink: false,
          symbolRepeat: true,
          silent: true,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: '#636DFF', // 0% 处的颜色
              }, {
                offset: 1,
                color: '#CA60EE', // 100% 处的颜色
              }],
            },
          },
          data: list,
          z: 1,
          animationEasing: 'elasticOut',
        },
          {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10, 20],
            symbolBoundingData: 2000,
            itemStyle: {
              normal: {
                color: '#D8D8D8',
              },
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [0, 2],
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                },
              },

            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut',
          },
          { //分隔
            type: 'pictorialBar',
            itemStyle: {
              color: 'rgb(255,255,255,0)',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [20, 2],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 2000,
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
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
    .specialBarChart {
        width: 100%;
        height: 100%
    }
</style>
