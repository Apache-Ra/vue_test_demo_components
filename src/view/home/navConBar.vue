<template>
  <div class='navCon'>
    <el-form ref="form" :model="navForm" label-width="80px">
      <el-form-item v-for="(item, key) in uploadNavData" :key="key" :label="item.label">
        <el-switch v-model="item.value"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    // 组建的名称
    title: '',
    name: 'navCon',
    computed: {
      ...mapState({
        uploadNavData: state => state.vux.uploadNavData,
      })
    },
    props: {
      navConBar: {
        type: Array,
        twoWay: true,
        default: () => ([])
      }
    },
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {},
    data() {
      return {
        navContentList: this.navConBar
      }
    },
    // 初始化记载
    created() {
      // 可以直接从vuex取数据，也可以从prop里面取值,这里直接从vuex取值
      let vue = this;
      // 这里通过prop取值
      // vue.$watch('uploadNavData',() =>{
      //   vue.navContentList = vue.uploadNavData
      // })
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {},
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>

</style>
