<template>
    <div class='about'>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        // 组建的名称
        title: '',
        name: 'about',
        computed: {
            ...mapState({
              testStore: state => state.vux.testStore,
            })
        },
        /**
         * 子组建传值
         * objData: {
         *   type: Object,
         *   default: () => ({ })
         * }
         * arrData: {
         *   type: Array,
         *   twoWay: true,
         *   default: []
         * }
         */
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
          // 监听值
          vue.$watch('testStore', ()=>{
            console.log('%c 我改变store的值为：Ra','color:green;background:orange;');
          })
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
