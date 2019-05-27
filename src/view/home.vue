<template>
  <div class="home components">
    <div class="components-item">
      <Ball_Chart :waterDate="waterDate"></Ball_Chart>
    </div>

  </div>

</template>
<script>
  import {mapState} from 'vuex'

  import Ball_Chart from '../components/ball_chart'

  export default {
    name: "home",
    inject: ['reload'],
    computed: {
      ...mapState({})
    },
    components: {Ball_Chart},
    data() {
      return {
        waterDate: {
          id: 'id name is undefined',
          current: 20,
          total: 100,
          isMark: true,
          // isShow: true,
          //chartTxt:{size: 36, family: '黑体', text: 'RA',color: 'red'}
        }
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">
  .components {
    border: 1px solid green;
    background: #FFF;

  }

  .components-item {
    padding: 20px;
  }
</style>
