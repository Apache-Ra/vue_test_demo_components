<template>
  <div class='rtsp'>
    <div class="video">
      <object type='application/x-vlc-plugin' pluginspage="http://www.videolan.org/" id='vlc' events='false' width="720" height="410">
        <param name='mrl' value='rtsp://admin:12345@192.168.10.235:554/h264/ch1/main/av_stream' />
        <param name='volume' value='50' />
        <param name='autoplay' value='true' />
        <param name='loop' value='false' />
        <param name='fullscreen' value='false' />
        <param name='controls' value='false' />
      </object>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'rtsp',
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
        test: ''
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
  .rtsp{width: 100%;height: 100%;}
  .video{width: 500px;height: 400px;margin: 0 auto;border:1px solid red;}
</style>
