<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column label="Date" prop="date">
        <template slot="header" slot-scope="scope">
          <el-checkbox>日期</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name">
        <template slot="header" slot-scope="scope">
          <el-checkbox>姓名</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="Address" prop="address">
        <template slot="header" slot-scope="scope">
          <el-checkbox>地址</el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  const tableData = [
    {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
    {date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
    {date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄'},
    {date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄'}
  ]
  export default {
    name: 'table',
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
        tableData: tableData
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

</style>
