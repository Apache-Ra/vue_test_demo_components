<template>
    <section class='tagCloudIndex main'>
        <div class="panel-title">
            <div class="border-left"></div>
            <div class="text">{{tagData.title}}</div>
        </div>
        <canvas class="tagCloud" :id="tagData.id"></canvas>
    </section>
</template>

<script>
const mockTagData = [
  {id: 1, label: '语文', value: 999, type: 0},
  {id: 2, label: '数学', value: 999, type: 0},
  {id: 3, label: '英语', value: 999, type: 0},
  {id: 4, label: '物理', value: 999, type: 0},
  {id: 5, label: '化学', value: 999, type: 0},
  {id: 6, label: '生物', value: 999, type: 0},
  {id: 7, label: '美术', value: 999, type: 0},
  {id: 8, label: '音乐', value: 999, type: 0},
  {id: 8, label: '体育', value: 999, type: 0},
  {id: 9, label: '编程', value: 999, type: 0},
  {id: 9, label: '劳动', value: 999, type: 0}
]
export default {
  name: 'index',
  title: '',
  components: {},
  computed: {},
  props: {
    tagModuleData: {
      type: Object,
      twoWay: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      tagData: {
        title: '标签',
        id: this.tagModuleData.boxId || 'tagCloud',
        list: this.tagModuleData.list || mockTagData,
      },
      timer: null
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
    const vue = this
    vue.$nextTick(() => {
      this.initTagCloud(vue.tagData)
    })
  },
  methods: {
    initTagCloud(options) {
      // 定时器
      let timers = null
      //画布
      let canvas
      //画布环境
      let context
      // 存储小球信息集合
      let balls_array = []
      // 当前显示小球的数量
      let current_ball = 0
      // 小球移动的角度
      let angle_change = 1
      canvas = document.getElementById(options.id)
      //鼠标移到Canvas
      canvas.addEventListener('mouseover', mouseOverCanvas, false);
      //鼠标移出Canvas
      canvas.addEventListener('mouseout', mouseOutCanvas, false);
      //鼠标单击Canvas
      canvas.addEventListener('click', clickCanvas, false);
      // 创建画笔
      context = canvas.getContext('2d');
      // 填充颜色（背景色）
      context.fillStyle = 'rgba(255, 255, 255, 0)'
      // 画布大小
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      // 画布的中心点
      const X = canvas.width / 2
      const Y = canvas.height / 2
      // 小球对的半径
      const R = 50
      loadBall()
      // 绘制外层大圆（用于测试）
      // ball({X: X, Y: Y, R: Y, C: 'green'})
      // 创建小球
      function ball(ballOption) {
        // 绘制曲线
        context.beginPath()
        // 线条的粗细
        context.lineWidth = 2
        // 线条的颜色
        context.strokeStyle = ballOption.C
        // 绘制图形
        context.arc(ballOption.X, ballOption.Y, ballOption.R, Math.PI * 2, false)
        // 路径描边
        context.stroke()
        // 写入文字
        context.fillText(ballOption.label, ballOption.X-10, ballOption.Y -10)
        context.fillText(ballOption.value, ballOption.X-10, ballOption.Y + 20)
      }
      // 加载小球
      function loadBall() {
        // 循环生成小球
        options.list.forEach((item, key) => {
          // 角度
          const angle = (key + 1) * (360 / options.list.length)
          // 弧度
          const radian = angle * (Math.PI / 180)
          // 计算小球的中心点
          const ball_X = X + Math.cos(radian)* (Y - R)
          const ball_Y = Y + Math.sin(radian)* (Y - R)
          // 整合小球信息
          item.angle = angle
          item.X = ball_X
          item.Y = ball_Y
          item.R = R
          item.C = 'red'
          balls_array.push(item)
          ball(item)
          current_ball ++
          if (current_ball === options.list.length) {
            timers = setInterval(ballMove, 20)
          }
        })
      }
      //小球移动
      function ballMove() {
        //清空画布中内容
        context.clearRect(0, 0, canvas.width, canvas.height)
        balls_array.forEach((item, key) => {
          if (item.angle === 360) item.angle = 0
          // 角度
          item.angle = item.angle + 1
          // 弧度
          const radian = item.angle * (Math.PI / 180)
          // 计算小球移动后的中心点
          const ball_X = X + Math.cos(radian)* (Y - R)
          const ball_Y = Y + Math.sin(radian)* (Y - R)
          // 整合小球信息
          item.X = ball_X
          item.Y = ball_Y
          item.R = R
          item.C = 'red'
          ball(item)
        })
      }
      //鼠标单击canvas
      function clickCanvas(e){
        const current = getEventPosition(e)
        balls_array.forEach(item => {
          if (current.x-10 >= item.X && current.x <= item.X + item.R && current.y-10 >= item.Y && current.y <= item.Y + item.R){
            console.log(item)
          }
        })
      }
      //鼠标移到Canvas,小球停止移动
      function mouseOverCanvas(){
        clearInterval(timers);
      }
      //鼠标移出Canvas,小球移动
      function mouseOutCanvas(){
        timers = setInterval(ballMove, 20);
      }
      //获取事件对象发生的位置
      function getEventPosition(ev) {
        let x, y;
        if (ev.layerX || ev.layerX == 0) {
          x = ev.layerX;
          y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
          x = ev.offsetX;
          y = ev.offsetY;
        }
        return { x: x, y: y };
      }
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .tagCloudIndex {
        width: 600px;
        height: 640px;
        margin: auto;
        position: relative;
        border: 1px solid orangered;
    }

    .panel-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid orangered;
    }

    .panel-title > .text {
        padding-left: 10px;
    }

    .tagCloud {
        position:absolute;
        width: 100%;
        height: calc(100% - 40px);
        /*height: 420px;*/
    }
</style>
