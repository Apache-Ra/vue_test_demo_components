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
        tagClass: this.tagModuleData.tagClass || '.tag',
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
    this.initTagCloud(this.tagData)
  },
  methods: {
    initTagCloud(options) {
      let canvas, context, X, Y
      let angle = 10
      let R = 50
      let balls_array = []
      let current_ball = 0
      let timer = null
      canvas = document.getElementById(options.id)
      //鼠标移到Canvas
      canvas.addEventListener('mouseover', mouseOverCanvas, false);
      //鼠标移出Canvas
      canvas.addEventListener('mouseout', mouseOutCanvas, false);
      context = canvas.getContext('2d');
      context.fillStyle = 'rgba(255, 255, 255, 0)'
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      X = canvas.width / 2
      Y = canvas.height / 2
      ball({X: X, Y: Y, R: Y, C: 'green'})
      // loadBall()
      function ball(ballOption) {
        context.beginPath()
        context.lineWidth = 2
        context.strokeStyle = ballOption.C
        context.arc(ballOption.X, ballOption.Y, ballOption.R, Math.PI * 2, false)
        context.stroke()
      }
      loadBall()
      // 测试单个小球移动
      function testBall () {
        context.clearRect(0, 0, canvas.width, canvas.height)
        const R = 50
        const radian = angle * (Math.PI / 180)
        const ball_X = X + Math.cos(radian)* (Y - R)
        const ball_Y = Y + Math.sin(radian)* (Y - R)
        angle = angle + 5
        ball({X: X, Y: Y, R: Y, C: 'green'})
        requestAnimationFrame(testBall)
        context.closePath();
        ball({X: ball_X, Y: ball_Y, R: R, C: 'red'})
      }
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
            requestAnimationFrame(ballMove)
          }
        })
      }

      //小球移动
      function ballMove() {
        console.log('A')
        angle = angle + 5
        requestAnimationFrame(ballMove)
        context.closePath();
        ball({X: X, Y: Y, R: Y, C: color()})
      }
      //鼠标移到Canvas,小球停止移动
      function mouseOverCanvas(){
        cancelAnimationFrame()
      }
      //鼠标移出Canvas,小球移动
      function mouseOutCanvas(){
      }
      //十六进制颜色随机
      function color(){
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);
        const color = '#'+R.toString(16)+G.toString(16)+B.toString(16);
        return color;
      }
    }
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .tagCloudIndex {width: 600px;height: 640px;margin: auto;position: relative;border: 1px solid orangered;}
    .panel-title {height: 40px;line-height: 40px;font-size: 14px;border-bottom: 1px solid orangered;}
    .panel-title > .text {padding-left: 10px;}
    .tagCloud {position:absolute;width: 100%;height: calc(100% - 40px);}
</style>
