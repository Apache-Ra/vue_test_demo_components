<template>
  <div class='bannerItem'>
    <slot></slot>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'bannerItem',
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
.bannerItem{
  width: 100%;height: 100%;
}
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
