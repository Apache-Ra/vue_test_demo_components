<template>
  <div class="home components flex-0-auto">
<!--    <div class="nav">-->
<!--      <NavBar :navBar="navList" @handleCheckNav="handleCheckNav"></NavBar>-->
<!--    </div>-->
<!--    <div class="nva-content">-->
<!--      <NavConBar :navConBar="navContentList"></NavConBar>-->
<!--    </div>-->
<!--    <div class="nav-desc">-->

<!--    </div>-->
      <div class="replace" @click="handleReplace">replace</div>
  </div>

</template>
<script>
  import CryptoJS from "crypto-js";
  import {mapState} from 'vuex'
  import NavBar from './home/navBar'
  import NavConBar from './home/navConBar'
   let defaultNavContentList = [
    [
      {label: '设备一', value: true},
      {label: '设备二', value: false},
      {label: '设备三', value: false},
      {label: '设备四', value: true}
    ],
    [
      {label: '设备一', value: false},
      {label: '设备二', value: false},
      {label: '设备三', value: false},
      {label: '设备四', value: true}
    ],
    [
      {label: '设备一', value: true},
      {label: '设备二', value: true},
      {label: '设备三', value: true},
      {label: '设备四', value: false}
    ],
    [
      {label: '设备一', value: false},
      {label: '设备二', value: false},
      {label: '设备三', value: true},
      {label: '设备四', value: false}
    ]
  ]
  let navList = [
    {label: '供应室', id: 1},
    {label: '手术室', id: 2},
    {label: '外科', id: 3},
    {label: '内科', id: 4}
  ]
  export default {
    // 组建的名称
    title: '',
    name: 'home',
    computed: {
      ...mapState({
        testStore: state => state.vux.testStore,
      })
    },
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {NavBar, NavConBar},
    data() {
      return {
        // 表单
        navForm: {},
        // 左侧
        navList: navList,
        // 右侧
        navContentList: []
      }
    },
    // 初始化记载
    created() {
      let vue = this;
      // 读取初始值
      vue.navContentList = defaultNavContentList[0];
      // 如果通过prop下面可注释
      vue.$store.commit('uploadNavData', defaultNavContentList[0])
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      //
      handleReplace(){
        let a = '小丸子'
        let params = CryptoJS.AES.encrypt(a, '123').toString();
        params = encodeURIComponent(params)
        // let params = CryptoJS.enc.Utf8.parse('AAA', '123').toString();
        console.log(params)
        window.open('http://localhost:8092/#/order/details?id=102&key='+params)
      },
      //
      handleCheckNav(item) {
        let vue = this;
        vue.navContentList = defaultNavContentList[item.id - 1];
        // 更新vuex 状态
        vue.$store.commit('uploadNavData', defaultNavContentList[item.id - 1])
        // 请求接口获得当前点击对象的数据信息
        // Request({
        //   url:'接口地址',
        //   method: 'POST',
        //   data:"参数"
        // }).then(data =>{
        //   // 得到数据
        //   // 循环结构生成自己需要的格式
        // })

      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang="less">
  .home {
    height: 100%;

    .nav {
      width: 400px;
    }

    .nva-content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 1px solid #CCC;
      margin: 0 10px;
    }

    .nav-desc {
      width: 100%;
      border: 1px solid #CCC;
      height: 100%;
    }
  }
</style>
