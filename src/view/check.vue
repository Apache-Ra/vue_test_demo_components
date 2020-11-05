<template>
  <div class='check'>
    <div class="checkTest">
      <!--全选-->
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" class="checkAll" @change="handleCheckAllChange">
        全选
      </el-checkbox>
      <!--动态赋值-->
      <el-checkbox-group class="checkGroup" v-model="selectCheck" @change="handleCheckChange">
        <el-checkbox v-for="(check, key) in checkList" :checked="check.check" :key="key" :label="check">
          {{check.label}}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="selectTest">
      <el-select
        v-model="testFrom.selectValue"
        @change="handleSelectChange"
        placeholder="请选择文章标签">
        <el-option label="选项一" value=1></el-option>
        <el-option label="选项二" value=2></el-option>
        <el-option label="选项三" value=3></el-option>
      </el-select>
      <el-button type="primary" @click="handleButton">buttonCont</el-button>
    </div>
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
        isIndeterminate: true,
        testFrom:{
          selectValue: "1"
        }
      }
    },
    // 初始化记载
    created() {
      let vue = this;
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
        if (val) {
          console.log(checkList)
        }
      },
      // 处理单个check改变值触发事件
      handleCheckChange(value) {
        let vue = this;
        let checkedCount = value.length;
        vue.checkAll = checkedCount === vue.checkList.length;
        vue.isIndeterminate = checkedCount > 0 && checkedCount < this.checkList.length;
        if (value.length != 0) {
          // console.log(value)
        }
        console.log(vue.selectCheck)
      },
      handleSelectChange(val){
        console.log(val)
      },
      handleButton(){
        let vue = this;
        console.log(vue.testFrom)
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

    .testOther {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #CCC;
      background: #FFF;

      img {
        /*animation (动画) :绑定选择器, 4s完成动画 linear(匀速) infinite(循环) */
        animation: que 1s linear infinite;
        width: 100px;
        height: 100px;
      }
      /*通过@keyframes规则,能够创建动画 , que 定义动画的名称 可自己定义*/
      @keyframes que {
        /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
        0% {
          /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

    }
  }
</style>
