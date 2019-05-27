<template>
  <div class='ball_chart'>
    <canvas :id="id" :style=style></canvas>
  </div>
</template>

<script>
  export default {
    // 组建的名称
    title: '',
    name: 'ball_chart',
    props: {
      waterDate: {
        type: Object,
        twoWay: true,
        default: () => ({
          id: 'ball_chart',
          current: 50,
          total: 100,
          chartStyle: {width: '200px', height: '200px'},
          chartBG: {color: '#DA2627', color_: '#FFF'},
          isShow: true,
          isShow: true,
          chartTxt: {
            size: 16,
            family: '黑体',
            text: 'RA',
            color: '#FFF'
          }
        })
      }
    },
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {},
    data() {
      return {
        // 唯一ID
        id: (this.waterDate.id) ? this.waterDate.id : 'idName',
        // canvas样式树形
        style: (this.waterDate.chartStyle) ? this.waterDate.chartStyle : '',
        // 图表背景色
        chartBG: (this.waterDate.chartBG) ? this.waterDate.chartBG : {color: '#DA2627', color_: '#FFF'},
        // 是否显示符号
        isMark: (this.waterDate.isMark) ? true : false,
        // 是否显示内容，默认显示
        isShow: (this.waterDate.isShow == undefined || this.waterDate.isShow) ? true : false,
        // 总
        total: (this.waterDate.total) ? this.waterDate.total : 100,
        // 当前
        current: (this.waterDate.current) ? this.waterDate.current : 50,
        //drawText 绘制文本
        chartTxt: (this.waterDate.chartTxt) ? this.waterDate.chartTxt : false
      }
    },
    // 初始化记载
    created() {
    },
    // DOM加载完毕执行操作
    mounted() {
      this.initData()
    },
    // 事件处理
    methods: {
      // 初始化chart
      initData() {
        let data = {
          total: this.total,
          current: this.current,
          isMark: this.isMark,
          isShow: this.isShow,
          value: (this.current / this.total).toFixed(2) * 100
        }
        // 自定义文本信息
        let chartTxt = this.chartTxt
        let canvas = document.getElementById(this.id)
        let ctx = canvas.getContext('2d')
        // range控件信息
        let rangeValue = data.value
        let nowRange = 0 // 用于做一个临时的range
        // 画布属性
        let mW = (canvas.width = 130)
        let mH = (canvas.height = 130)
        let lineWidth = 2
        // 圆属性
        let r = mH / 2 // 圆心
        // let cR = r - 16 * lineWidth; //圆半径
        let cR = 64
        // Sin 曲线属性
        let sX = 0
        let sY = mH / 2
        let axisLength = mW // 轴长
        let waveWidth = 0.015 // 波浪宽度,数越小越宽
        let waveHeight = 6 // 波浪高度,数越大越高
        let speed = 0.09 // 波浪速度，数越大速度越快
        let xOffset = 0 // 波浪x偏移量

        ctx.lineWidth = lineWidth

        // 画圈函数
        let isDrawCircled = false
        let drawCircle = () => {
          ctx.shadowBlur = 2
          ctx.shadowColor = 'rgba(0,162,195,1)'
          ctx.shadowOffsetX = 0
          ctx.shadowOffsetY = 0
          ctx.beginPath()
          let circleColor = this.chartBG.color
          ctx.strokeStyle = circleColor
          ctx.arc(r, r, cR, 0, 2 * Math.PI)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(r, r, cR, 0, 2 * Math.PI)
          ctx.clip()
        }
        // let that = this
        // 画sin 曲线函数
        let drawSin = (xOffset) => {
          ctx.save()

          let points = [] // 用于存放绘制Sin曲线的点

          ctx.beginPath()
          // 在整个轴长上取点
          for (let x = sX; x < sX + axisLength; x += 20 / axisLength) {
            // 此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
            let y = -Math.sin((sX + 2 * x) * waveWidth + xOffset)

            let dY = mH * (1 - nowRange / 100)

            points.push([x, dY + y * waveHeight])
            ctx.lineTo(x, dY + y * waveHeight)
          }

          let grd = ctx.createLinearGradient(0, 0, 0, 130)

          grd.addColorStop(1, this.chartBG.color);
          grd.addColorStop(0, this.chartBG.color_);

          // 封闭路径
          ctx.lineTo(axisLength, mH)
          ctx.lineTo(sX, mH)
          ctx.lineTo(points[0][0], points[0][1])
          ctx.fillStyle = grd
          ctx.fill()

          ctx.restore()
        }

        // 写百分比文本函数
        let drawText = function () {
          ctx.save()
          let size = 34
          ctx.font = 'bold ' + size + 'px 方正兰亭细黑_GBK'
          ctx.textAlign = 'center'
          // ctx.textBaseline = 'middle',
          ctx.fillStyle = 'rgb(255,255,255)'
          ctx.fillText(nowRange, r - 5, r + size / 2);
          ctx.restore()
        }
        // 符号
        let mark = function () {
          ctx.save()
          let size = 16
          ctx.font = 'bold ' + size + 'px 方正兰亭细黑_GBK '
          ctx.textAlign = 'right'
          ctx.fillStyle = 'rgb(255,255,255)'
          ctx.fillText('%', r + 30, r + size / 2 + 6)
          ctx.restore()
        }
        // 自定义文本
        let customizeTxt = function () {
          ctx.save()
          let size = chartTxt.size;
          ctx.font = 'bold ' + size + 'px ' + chartTxt.family;
          ctx.textAlign = 'center'
          ctx.fillStyle = chartTxt.color
          ctx.fillText(chartTxt.text, r, r + size / 2);
          ctx.restore()
        }
        let render = function () {
          ctx.clearRect(0, 0, mW, mH)

          rangeValue = data.value

          if (isDrawCircled === false) {
            drawCircle()
          }

          if (nowRange <= rangeValue) {
            let tmp = 1
            nowRange += tmp
          }

          if (nowRange > rangeValue) {
            let tmp = 1
            nowRange -= tmp
          }

          drawSin(xOffset)

          if (data.isShow) {

            // 如果需要自定义显示内容（自定义文字和百分比不能共存）
            if (chartTxt.text) {
              customizeTxt()
            } else {
              // 如果需要显示符号(百分比符号)
              if (data.isMark) {
                mark();
              }
              drawText();
            }
          }

          xOffset += speed
          requestAnimationFrame(render)
        }
        render()
      }
    },
    // 离开路由的操作
    destroyed() {
    },
    watch: {
      waterDate: function () {
        this.initData()
      }
    }
  }
</script>

<style scoped lang='less'>

</style>
