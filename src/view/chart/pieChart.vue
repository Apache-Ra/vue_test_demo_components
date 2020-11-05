<template>
  <div class='pieChart'>
    <div class="chart" :id="this.chartData.id"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Echarts from 'echarts'
// import colorsList from '../../kit/color.config'
const colorsList = (key) =>{
  const colors = [
    {one:'#0D6F7E',two:'#0FE2BD'},
    {one:'#A18F17',two:'#D0C036'},
    {one:'#094C69',two:'#05B5CF'}
  ]
  return colors[key]
}
export default {
  name: 'pieChartBar',
  title: '',
  inject: ['reload'],
  components: {},
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    })
  },
  props: {
    chartData: {
      type: Object,
      twoWay: true,
      default: () => ({
        id:'default_chartData',
        seriesData:[
          {value:30, name:'AAA'},
          {value:20, name:'BBB'},
          {value:10, name:'CCC'},
        ]
      })
    }
  },
  data() {
    return {
      test: ''
    }
  },
  created() {
  },
  updated() {
    let vue = this;
    vue.$nextTick(function () {
      vue.initChart(vue.chartData.id)
    })
  },
  mounted() {
    let vue = this;
    vue.$nextTick(function () {
      vue.initChart(vue.chartData.id)
    })
  },
  methods: {
    // 渲染图表
    initChart(ID) {
      let vue = this;
      vue.charts = Echarts.init(document.getElementById(ID));
      window.onresize = vue.charts.resize;

      vue.charts.setOption({
        grid: {x: 60, y: 60, x2: 40, y2: 30, borderWidth: 1},
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: {
          name:'',
          type:'pie',
          radius: ['50%', '80%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                color:'#FFF',
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          // 环形图背景颜色
          itemStyle: {
            normal: {
              color: function(params) {
                return new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  offset: 0,
                  color: colorsList([params.dataIndex]).two
                }, {
                  offset: 1,
                  color: colorsList([params.dataIndex]).two
                }])
              }
            }
          },
          data:vue.chartData.seriesData
        }
      })
    }
  },
  watch: {},
  destroyed() {
  }
}
</script>

<style scoped lang="less">
  .pieChart{
    width: 100%;height: 100%;
    .chart{width: 100%;height: 100%;}
  }
</style>
