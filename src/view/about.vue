<template>
  <div class="home components flex-0-auto">
    <div class="nav ">
      <div class="item" v-for="(item, key) in navList" :key="key" @click="handleCheckNav(item)">{{item.label}}</div>
    </div>

    <div class="nva-content">
      <el-form ref="form" :model="navForm" label-width="80px">
        <el-form-item v-for="(item, key) in navContentList" :key="key" :label="item.label">
          <el-switch v-model="item.value"></el-switch>
        </el-form-item>
      </el-form>
    </div>


  </div>

</template>
<script>
  import {mapState} from 'vuex'

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
    name: 'about',
    computed: {
      ...mapState({
        testStore: state => state.vux.testStore,
      })
    },
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {},
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
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      handleCheckNav(item) {
        let vue = this;
        vue.navContentList = defaultNavContentList[item.id -1];
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
      width: 300px;

      .item {
        border: 1px solid #CCC;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 10px;
      }
    }

    .nva-content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 1px solid #CCC;
      margin: 0 10px;
    }
  }
</style>
