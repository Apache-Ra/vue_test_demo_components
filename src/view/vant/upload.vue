<template>
    <section class='upload'>
        <van-uploader
                v-model="fileList"
                multiple
                :max-count="1"
                capture
                :after-read="afterRead"
                @delete="deletes()"/>
        <!--        <van-uploader v-model="fileList" :before-read="beforeRead" :after-read="afterRead" />-->
    </section>
</template>

<script>
import {mapState} from 'vuex'

/**
 * 将base64转为file
 * @param dataurl
 * @param filename
 * @returns {File}
 */
const dataURLtoFile = (dataurl, filename) => {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {type: mime})
}

export default {
  name: 'upload',
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
      fileList: [],
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
  },
  methods: {
    // 上传前
    afterRead(file) {
      console.log(file)
      // if (/\/(?:jpeg|png)/i.test(file.file.type) && file.file.size > 512000)
      if (file.file.size > 512000) {
        let canvas = document.createElement('canvas') // 创建Canvas对象(画布)
        let context = canvas.getContext('2d')
        let img = new Image()
        // 指定图片的DataURL(图片的base64编码数据)
        img.src = file.content
        let files = file
        img.onload = () => {
          canvas.width = img.naturalWidth / 4
          canvas.height = img.naturalHeight / 4
          context.drawImage(img, 0, 0, canvas.width, canvas.height)
          // 0.92为默认压缩质量
          files.content = canvas.toDataURL(files.file.type, 0.92)
          //dataURLtoFile为自己封装的函数，将base64转为file
          let myFile = dataURLtoFile(files.content, files.file.name)
          console.log(myFile)
          const formDatas = new FormData()
          formDatas.append('fileName', myFile)
          //上传的封装函数
          console.log('==================>')
          console.log(formDatas)
        }
      } else {
        const formData = new FormData()
        formData.append('fileName', file.file)
        console.log(formData)
        //上传的封装函数
      }
    },
    deletes() {
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .upload {
        width: 100%;
        height: 100%;
    }
</style>
