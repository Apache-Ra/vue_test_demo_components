<template>
  <div class="home components">
    <div class="components-item">
      <div @click="updateStore" class="updateStore">我要改变stor</div>
    </div>

  </div>

</template>
<script>
  import {mapState} from 'vuex'
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
    components: {},
    data() {
      return {}
    },
    // 初始化记载
    created() {
      let vue = this;
      // 读取初始值
      console.log('%c Store初始化数据：'+vue.testStore,'color:red;background:yellow;');




    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      updateStore(){
        let vue = this;
        // 改变值
        vue.$store.commit('testStore', 'Ra');
        console.log('%c 我改变store的值为：Ra','color:green;background:yellow;');
        vue.$router.push({name:'about'})
      }
    },
    // 离开路由的操作
    destroyed() {
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
    .updateStore{
      cursor: pointer;
    }
  }
</style>
