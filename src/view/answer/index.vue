<template>
    <section class='answerIndex'>
        <check-box-item :check-data="mockData"></check-box-item>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import checkBoxItem from './checkBoxModule/checkBoxItem'
const mockData = [
  {
    id: 1, title: '你们想好了吗？', value: [], type: 0, list: [
      {id: 1, check: false, name: '我想好了'},
      {id: 2, check: false, name: '我还没想好'},
      {id: 3, check: false, name: '我不愿意想'},
      {id: 4, check: false, name: '我什么都不说'},
    ],
  },
  {
    id: 2, title: '项目到什么程度了？', value: 1, type: 0, list: [
      {id: 1, name: '还没开始'},
      {id: 2, name: '刚刚开始'},
      {id: 3, name: '进行到一半了'},
      {id: 4, name: '进入测试阶段'},
    ],
  },
]
export default {
  name: 'index',
  title: '',
  inject: ['reload'],
  components: { checkBoxItem },
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    }),
  },
  props: {
  },
  data() {
    return {
      mockData: mockData
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
  },
  methods: {

  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">

</style>
