<template>
    <section class='chart specialBarChart' :id="chartData.id"></section>
</template>

<script>
import {mapState} from 'vuex'
import Echarts from 'echarts'
import uuid from 'uuid'
import array from '../../../kit/Array.util'
export default {
  name: 'specialBarChart',
  title: '',
  inject: ['reload'],
  components: {},
  computed: {
    ...mapState({
    }),
  },
  props: {
    chartData: {
      type: Object,
      twoWay: true,
      default: () => ({
        id: uuid(),
        xAxis: ['--','--','--','--'],
        data: [10, 10, 10, 10],
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
      vue.charts = Echarts.init(document.getElementById(ID))
      window.onresize = vue.charts.resize
      const max = array.max(vue.chartData.data)
      const maxData = vue.chartData.data.map(item => {
        return max * 2
      })
      vue.charts.setOption({
        grid: {x: 120, y: 60, x2: 40, y2: 30, borderWidth: 1},
        backgroundColor: 'rgb(255,255,255,0)',
        color: ["#59e7eb", "#38e27f", "#2f92ed", "#d0cc6f", "#e47f2e"],
        tooltip: {},
        grid: {
          top: "12%",
          left: "7%",
          right: "7%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [{
          type: "category",
          boundaryGap: true,
          data: vue.chartData.xAxis
        },
          {
            type: 'category',
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              show: true
            },
            splitArea: {
              show: true
            },
            splitLine: {
              show: true
            },
            data: vue.chartData.xAxis
          }
        ],
        yAxis: [{
          type: "value",
          nameTextStyle: {
            color: "#fff"
          },
          name: "数量/个",
          max: 200,
          min: 0,
          interval: 50,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#676C7B"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#676C7B"
            }
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: "#d1e6eb"
            }
          },
          axisTick: {
            show: false
          }
        }],
        series:
          [
            // bar图的外边框
            {
              type: "bar",
              barWidth: "28",
              xAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  borderColor: "#4292A7",
                  barBorderRadius: 2,
                  borderWidth: 1
                }
              },
              data: maxData
            },
            {
              // 内部数据
              type: "bar",
              barWidth: "18",

              xAxisIndex: 1,
              label: {
                show: true,
                formatter: "{A|}",
                color: "#fff",
                position: "top",
                distance: -10,
                backgroundColor: "#60FFFF",
                padding: 0,
                borderRadius: 1,
                rich: {
                  A: {
                    width: 28,
                    height: 40,
                    borderRadius: 1,
                    lineHeight: 15,
                    backgroundColor: "#60FFFF"
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: "#54FCFC"
                    },
                      {
                        offset: 1,
                        color: "#1F4869"
                      }
                    ]
                  }
                }
              },
              data: [100, 130, 50, 90]
            }
          ]
      })
    }
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
.chart{width: 100%; height: 100%}
</style>
