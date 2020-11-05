<template>
  <transition>
    <div class="sweiper-item" v-show="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'swiperItem',
    title: '',
    inject: ['reload'],
    components: {},
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      }),
      isShow(){
        return this.selected===this.name;
      }
    },
    props: {
      Data: {
        type: Object,
        twoWay: true,
        default: () => ({})
      },
      name:{
        type:String,
        required:true
      },
    },
    data() {
      return {
        selected: ''
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
  .sweiper-item{width: 100%;height: 100%;}

  .v-enter-active,.v-leave-active{
    transition: all 1s linear;
  }
  .v-leave-to{
    transform:translate(-100%);
  }
  .v-enter{
    transform: translate(100%);
  }
  .v-enter-active{
    position: absolute;
    top:0;
    left: 0;
  }
</style>
