import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * 状态监听
 */
const store = new Vuex.Store({})
store.registerModule('vux', {
  state: {
    showLoader: false,
    // 测试数据
    testStore:'abcdefg'
  },
  mutations: {
    uploadShowLoader(state, showLoader){
      state.showLoader = showLoader
    },
    // 测试数据
    testStore(state, testStore){
      state.testStore = testStore
    }
  },
  getters: {},
  actions: {},
  moudles: {}
})
/**
 * 出口
 */
export default store
