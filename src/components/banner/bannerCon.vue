<template>
  <div class='bannerCon'>
    <slot></slot>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'bannerCon',
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
  .bannerCon {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
</style>
