<template>
  <div class="home components">
    <div class="components-item">
      <Ball_Chart :waterDate="waterDate"></Ball_Chart>
    </div>

  </div>

</template>
<script>
  import {mapState} from 'vuex'

  import Ball_Chart from '../components/ball_chart'

  export default {
    name: "home",
    inject: ['reload'],
    computed: {
      ...mapState({})
    },
    components: {Ball_Chart},
    data() {
      return {
        waterDate: {
          id: 'id name is undefined',
          // canvas样式树形
          style: {width: '300px', height: '300px'},
          // 图表背景色
          chartBG: {color: '#DA2627', color_: '#FFF'},
          // 是否显示符号,可不写默认false  true / false
          isMark: true,
          // 是否显示默认内容，可不写默认true  true / false
          isShow: true,
          // 总 int
          total: 100,
          // 当前 int
          current:  30,
          //drawText 绘制文本  不能和isShow同时存在，童话故事存在会显示自定义内容
          chartTxt: {
            size: 16,
            family: '黑体',
            text: 'RA',
            color: '#FFF'
          }
        }
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">
  .components {
    border: 1px solid green;
    background: #FFF;

  }

  .components-item {
    padding: 20px;
  }
</style>
