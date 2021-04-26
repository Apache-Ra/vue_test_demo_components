<template>
    <section class="mobile page">
        <ul class="list">
            <li v-for="i in 10" class="item"></li>
        </ul>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  title: '',
  inject: ['reload'],
  components: {},
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    }),
  },
  props: {
    Data: {
      type: Object,
      twoWay: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      test: '',
      dataList: []
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
  },
  methods: {},
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .list{display: flex;flex-direction: row;flex-wrap: wrap;}
    .item{width: 33.3%; height: 200px; border:1px solid red;}
</style>
