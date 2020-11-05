<template>
  <div class='unlockIndex'>
    <gesture-unlock></gesture-unlock>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import gestureUnlock from "./gestureUnlock";

  export default {
    name: 'index',
    title: '',
    inject: ['reload'],
    components: {gestureUnlock},
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
  .unlockIndex {
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
</style>
