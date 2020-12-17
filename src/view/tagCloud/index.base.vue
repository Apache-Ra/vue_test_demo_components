<template>
    <section class='tagCloudIndex main'>
        <div class="panel-title">
            <div class="border-left"></div>
            <div class="text">{{tagData.title}}</div>
        </div>
        <div class="tagCloud" :id="tagData.boxId">
            <div class="tagContent">
                <div class="tag"
                     :class="tagData.type" v-for="(item, key) in tagData.list"
                     :key="key"
                     :id="'tag'+key">
                    <div class="tagInfo">
                        <p>{{item.label}}</p>
                        <p>{{item.value}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const mockTagData = [
  {id: 1, label: '语文', value: 99, type: 0},
  {id: 2, label: '数学', value: 99, type: 0},
  // {id: 3, label: '英语', value: 99, type: 0},
  // {id: 4, label: '物理', value: 99, type: 0},
  // {id: 5, label: '化学', value: 99, type: 0},
  // {id: 6, label: '生物', value: 99, type: 0},
  // {id: 7, label: '美术', value: 99, type: 0},
  // {id: 8, label: '音乐', value: 99, type: 0},
  // {id: 8, label: '体育', value: 99, type: 0},
  // {id: 9, label: '编程', value: 99, type: 0},
  {id: 9, label: '劳动', value: 99, type: 0}
]
export default {
  name: 'index',
  title: '',
  components: {},
  computed: {},
  props: {
    tagModuleData: {
      type: Object,
      twoWay: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      tagData: {
        title: '标签',
        boxId: this.tagModuleData.boxId || 'tagCloud',
        tagClass: this.tagModuleData.tagClass || '.tag',
        list: this.tagModuleData.list || mockTagData,
      },
      timer: null
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
    this.initTagCloud(this.tagData)
  },
  methods: {
    initTagCloud(options) {
      const vue = this
      // 角度计算
      const angle = 360 / options.list.length
      const TAG_DOM = document.querySelectorAll(options.tagClass)
      TAG_DOM.forEach((item, index) => {
        item.style.transform = 'rotate(' + index * angle + 'deg)'
        item.style.value = index * angle
        item.children[0].style.transform = 'rotate(-' + index * angle + 'deg)'
      })
      // 定时器方法
      function timer (status) {
        let timerFn = null
        if (status) {
          let num = 0
          timerFn = setInterval(() => {
            if (num * angle > 360) num = 0
            update(num)
            num++
          }, 1000)
        } else {
          clearInterval(timerFn)
        }
      }
      // 打开定时器
      // timer(true)
      update(0)
      // 移动小球
      function update(num) {
        // 外层旋转
        const TAG = document.getElementsByClassName('tagContent')[0]
        if (num === 0) {
          TAG.style.transition = null
          TAG.style.transform = 'rotate(' + num * angle + 'deg)'
        } else {
          TAG.style.transition = '2s'
          TAG.style.transform = 'rotate(' + num * angle + 'deg)'
        }
        // 内层文字
        TAG_DOM.forEach((item, index) => {
          // const angles = (item.style.value === 0) ? item.style.value : item.style.value * 2
          const angles = item.style.value
          // if (num === 0) {
          //   item.children[0].style.transition = null
          // } else {
          //   item.children[0].style.transition = '.5s'
          // }
          console.log(item.style.value)
          item.children[0].style.transform = 'rotate(' + angles + 'deg)'
        })
      }
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .tagCloudIndex {
        width: 500px;
        height: 460px;
        margin: auto;
        position: relative;
        border: 1px solid orangered;
    }

    .panel-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid orangered;
    }

    .panel-title > .text {
        padding-left: 10px;
    }

    .tagCloud {
        height: calc(100% - 40px);
        height: 420px;
    }

    .tagContent {
        width: 420px;
        height: 420px;
        margin: 0 auto;
        /*border-radius: 50%;*/
        position: relative;
        border:1px solid red;
    }
    .tag {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: inline-block;
        height: 80px;
        line-height: 80px;
        width: 400px;
        border: 1px solid blue;
        position: absolute;
        cursor: pointer;
        z-index: 1;
    }

    .tagInfo {
        cursor: pointer;
        width: 80px;
        height: 80px;
        border: 1px solid red;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        box-shadow: rgb(191, 4, 118) 0px 0px 0.2rem 0.04rem inset, rgb(197, 119, 191) 0px 0px 0.2rem 0px inset;
    }
    .tagInfo p{height: 40px; }
    .tagInfo p:first-child{line-height: 60px;}
    .tagInfo p:last-child{line-height: 20px;}

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(360deg);
        }
        to {
            -webkit-transform: rotate(0deg);
        }
    }
</style>
