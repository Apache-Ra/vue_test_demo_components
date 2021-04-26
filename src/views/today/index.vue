<template>
    <section class='index'> 今日 </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'index',
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
  methods: {},
  watch: {},
  destroyed () {
  }
}
</script>

<style scoped lang="less">

</style>
