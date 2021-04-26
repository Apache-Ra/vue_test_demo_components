<template>
    <section id="app">
        <header-layout></header-layout>
        <transition :name="transitionName" appear tag="section">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition :name="transitionName" appear tag="section">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <bottom-layout></bottom-layout>
    </section>
</template>
<script>
import headerLayout from './components/layout/headerLayout'
import bottomLayout from './components/layout/bottomLayout'

export default {
  name: 'App',
  components: {
    headerLayout,
    bottomLayout
  },
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      const vue = this
      if (to.meta.index > from.meta.index) {
        vue.transitionName = 'slide-left'
      } else {
        vue.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less">
    @import "assets/style/public";
    @import "assets/style/animate";
</style>
