<template>
  <div class='check'>
    <!--全选-->
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" class="checkAll" @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <!--动态赋值-->
    <el-checkbox-group class="checkGroup" v-model="selectCheck" @change="handleCheckChange">
      <el-checkbox v-for="(check, key) in checkList" :checked="check.check" :key="key" :label="check">{{check.label}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  // 模拟数据
  const checkList = [
    {label: '高一', value: '10', check: true},
    {label: '高二', value: '20', check: false},
    {label: '高三', value: '30', check: true},
    {label: '高四', value: '11', check: false},
    {label: '高五', value: '22', check: true},
    {label: '高六', value: '33', check: false}
  ]
  export default {
    // 组建的名称
    title: '',
    name: 'check',
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      })
    },
    /**
     * 子组建传值
     * objData: {
     *   type: Object,
     *   default: () => ({ })
     * }
     * arrData: {
     *   type: Array,
     *   twoWay: true,
     *   default: []
     * }
     */
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {},
    data() {
      return {
        checkAll: false,
        selectCheck: [],
        checkList: checkList,
        isIndeterminate: true
      }
    },
    // 初始化记载
    created() {
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      // 处理全选触发事件
      handleCheckAllChange(val) {
        let vue = this;
        vue.selectCheck = val ? checkList : [];
        vue.isIndeterminate = false;
        if(val){
          console.log(checkList)
        }
      },
      // 处理单个check改变值触发事件
      handleCheckChange(value) {
        let vue = this;
        let checkedCount = value.length;
        vue.checkAll = checkedCount === vue.checkList.length;
        vue.isIndeterminate = checkedCount > 0 && checkedCount < this.checkList.length;
        if(value.length !=0){
         // console.log(value)
        }
        console.log(vue.selectCheck)
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  .check {
    padding: 20px;
    border: 1px solid #CCC;
    background: #FFF;

    .checkAll {
      padding: 10px 0
    }
  }
</style>
