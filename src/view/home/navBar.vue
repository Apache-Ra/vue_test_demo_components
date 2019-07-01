<template>
  <div class='navBar'>
    <div class="item" v-for="(item, key) in navList" :key="key" @click="handleCheckNav(item)">{{item.label}}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    // 组建的名称
    title: '',
    name: 'navBar',
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      })
    },
    props: {
      navBar:{
        type: Array,
        twoWay: true,
        defaule: () => ([])
      }
    },
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {},
    data() {
      return {
        navList: this.navBar
      }
    },
    // 初始化记载
    created() {
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      handleCheckNav(item){
        let vue = this;
        vue.$emit('handleCheckNav', item)
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  .item {
    border: 1px solid #CCC;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 10px;
  }
</style>
