<template>
  <div class="sweiperCon">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: "sweiperCon",
    data() {
      return {
        current: ''
      }
    },
    props: {
      value: {
        type: String,
        default: ""
      },
    },
    mounted() {
      //自动轮播时查找name值用indexOf的方法遍历出当前轮播的下表
      this.names = this.$children.map(child => {
        return child.name
      });
      this.showImg();
      this.paly()
    },
    methods: {
      showImg() {
        this.current = this.value || this.$children[0].name;
        //当前实例的直接子组件
        this.$children.map(vm => {
          vm.selected = this.current
        })
      },

      paly() {
        //每次轮播把图片做调整
        this.timer = setInterval(() => {
          //indexOf返回某个指定字符串首次出现的位置
          const index = this.names.indexOf(this.current);
          let newIndex = index + 1;
          //严谨一点
          if (newIndex === this.names.length) {
            newIndex = 0;
          }
          this.$emit("input", this.names[newIndex])
        }, 3000)
      }
    },
    watch: {
      //监听value值，发生变化就改变selected
      value() {
        this.showImg()
      }
    },
    beforeDestroy() {
      //实列销毁前
      clearInterval(this.timer)
    }
  };
</script>
<style>
  .sweiperCon {
    /*border: 1px solid black;*/
    width: 100%;
    height: 4rem;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
</style>
