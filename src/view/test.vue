<template>
    <section class='testIndex'>
        <special-bar-chart :chart-data="chartData"></special-bar-chart>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import uuid from 'uuid'
import specialBarChart from '../components/common/chart/specialBarChart'
const mockChartData = {
  id: uuid(),
  xAxis: ['A','B','C','D'],
  data: [110, 130, 90, 30],
}
export default {
  name: 'test',
  title: '',
  inject: ['reload'],
  components: { specialBarChart },
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
      chartData: mockChartData,
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
.testIndex{
    width: 100%;
    height: 100%;
}
</style>
