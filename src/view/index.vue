<template>
  <div class='index main'>
<!--    <div class="banner">-->
<!--      <swiper-con v-model="selected">-->
<!--        <swiper-item v-for="(item, key) in swiperList" :key="key" :name="item.name">-->
<!--          <p>{{item.name}}</p>-->
<!--        </swiper-item>-->
<!--      </swiper-con>-->
<!--    </div>-->

    <div class="banner">
      <banner-con>
        <banner-item v-for="(item, key) in swiperList"
                     :key="key" :bannerItemData="item">{{item.name}}</banner-item>
      </banner-con>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import swiperCon from "../components/sweiper/swiperCon";
  import swiperItem from "../components/sweiper/swiperItem";

  import {bannerCon, bannerItem} from "../components/banner/banner";

  const swiperList = [
    {id:1, name:'A',desc:'aaa',link:'#'},
    {id:2, name:'B',desc:'bbb',link:'#'},
    {id:3, name:'C',desc:'ccc',link:'#'}
  ]
  export default {
    name: 'index',
    title: '',
    inject: ['reload'],
    components: {swiperCon,swiperItem,bannerCon, bannerItem},
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
        swiperList:swiperList,
        selected: "item1",
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
    }
  }
</script>

<style scoped lang="less">
  .banner{width: 400px;height: 200px;border:1px solid red;
    margin: 0 auto;}

  .sweiperCon{width: 100%;height: 100%;}
</style>
