<template>
  <div class='swiperIndex'>
    <div class=" ">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="'./static/img/'+item+'.jpg'" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'swiperIndex',
    title: '',
    inject: ['reload'],
    components: {},
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      })
    },
    props: {
      Data: {
        type: Object,
        twoWay: true,
        default: () => ({})
      }
    },
    data() {
      return {
        test: ''
      }
    },
    updated() {
    },
    mounted() {
    },
    methods: {},
    watch: {},
    destroyed() {
    }
  }
</script>

<style scoped lang="less">
  .swiperIndex{width: 100%;height: 100%;}
  .banner{border:1px solid red; width: 500px;height: 300px;position: absolute;left: 0;right: 0; top:0;bottom:0;margin: auto;background: #FFF;}

</style>
