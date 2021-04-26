<template class='bottomLayout'>
        <van-tabbar v-model="active" route>
            <van-tabbar-item
                    v-for="(nav, key) in routes"
                    :key="key"
                    replace
                    :to="nav.path"
                    v-text="nav.meta.title"></van-tabbar-item>
        </van-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'bottomLayout',
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
      active: '/home',
      routes: []
    }
  },
  created () {
    const allRouter = this.$router.options.routes
    allRouter.forEach(item => {
      if (item.meta && item.meta.isBottom) {
        this.routes.push(item)
      }
    })
  },
  updated () {
  },
  mounted () {
  },
  methods: {},
  watch: {},
  destroyed () {
  }
}
</script>

<style scoped lang="less">

</style>
