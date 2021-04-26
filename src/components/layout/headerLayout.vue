<template>
    <van-nav-bar
        class='headerLayout'
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'headerLayout',
  title: '',
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
  data () {
    return {
      test: ''
    }
  },
  created () {
  },
  updated () {
  },
  mounted () {
  },
  methods: {
    onClickLeft () {},
    onClickRight () {}
  },
  watch: {},
  destroyed () {
  }
}
</script>

<style scoped lang="less">

</style>
