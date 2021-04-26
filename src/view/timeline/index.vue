<template>
    <section class='timeline main'>
        <div class="timelineList">
            <p class="line"></p>
            <div class="timeItem" :class="(item.id % 2)?'up':'down'" v-for="(item, key) in timeLineData" :key="key">
                <p class="p time">{{item.time}}</p>
                <p class="p text">{{item.content}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'

const mockTimeLineData = [
  {id: 1, time: '2020-01-01', content: '写代码，改BUG，改BUG'},
  {id: 2, time: '2020-01-02', content: '写代码，改BUG，改BUG'},
  {id: 3, time: '2020-01-03', content: '写代码，改BUG，改BUG'},
  {id: 4, time: '2020-01-04', content: '写代码，改BUG，改BUG'},
  {id: 5, time: '2020-01-05', content: '写代码，改BUG，改BUG'},
  {id: 6, time: '2020-01-06', content: '写代码，改BUG，改BUG'},
]
export default {
  name: 'timeline',
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
      timeLineData: mockTimeLineData,
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
    .timelineList{
        height: 120px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .timeItem {
        width: 200px;height: 60px;position: relative;
    }
    .timeItem:nth-of-type(2n-1){border:1px solid green;align-self:flex-start}
    .timeItem:nth-of-type(2n){border:1px solid yellow;align-self:flex-end}
    .timeItem:before{
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border:1px solid red;
        margin: 0 auto;
        background: #FFF;
    }
    .up:before{
        bottom: -10px;
    }
    .down:before{
        top: -10px;
    }
    .p{height: 30px; padding: 0 10px}
    .line{width:100%;position:absolute;height: 1px;border:1px solid #000}
    .time{line-height: 40px;}
    .text{line-height: 20px;}
</style>
