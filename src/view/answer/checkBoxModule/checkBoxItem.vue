<template>
  <section class='checkBoxItem'>
      <div class="answerContent" v-for="(item, key) in checkData">
          <div class="problem">{{key+1}} , {{item.title}}</div>
          <div class="answer"
               v-for="(item_, key_) in item.list"
               :style="item_.check?'background: green;color:#FFF':''"
               @click="handleAnswerChange(item, key_)">
              <label :for="'answer_' + key+key_" class="answerInfo">
                  <div class="check">
                      <input :type="item.type === 0 ? 'checkbox': 'radio'"
                             :name="item.type === 0 ? key+'_'+key+'_answer' : 'answer'"
                             :checked="item_.check"
                             :id="'answer_' + key+key_">
                  </div>

                  <div class="text" :class="'answer_' + key+key_">
                      <p>{{key_ + 1}} , {{item_.name}}</p>
                  </div>
              </label>
          </div>
          <p class="button" @click="handleAnswer(item)">下一题</p>
      </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'checkBoxItem',
  title: '',
  inject: ['reload'],
  components: {},
  computed: {
    ...mapState({
      // showLoader: state => state.vux.showLoader,
    }),
  },
  props: {
    checkData: {
      type: Array,
      twoWay: true,
      default: () => ([]),
    },
  },
  data() {
    return {
      test: '',
    }
  },
  created() {
  },
  updated() {
  },
  mounted() {
  },
  methods: {
    handleAnswerChange(item, index){
      item.list[index].check = !item.list[index].check
      if (item.list[index].check){
        item.value.push(item.list[index].id)
      } else {
        remove(item.list[index].id)
      }

      function indexOf(val) {
        for (let i = 0; i < item.value.length; i++) {
          if (item.value[i] === val) return i;
        }
        return -1;
      }
      function remove(val) {

        let index = indexOf(val);
        if (index > -1) {
          item.value.splice(index, 1);
        }
      }

    },
    handleAnswer(item) {
      const content = unique(item.value)
      console.log(content)
      function unique(arr) {
        return Array.from(new Set(arr))
      }
    },
  },
  watch: {},
  destroyed() {
  },
}
</script>

<style scoped lang="less">
    .problem {
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #C1C1C1;
    }

    .answer {
        background: #CCC;
    }

    .answerContent {
    }

    .answerInfo {
        margin-top: 5px;
        display: flex;
        padding: 10px 15px;
        position: relative;
        lign-items: center;
        cursor: pointer;
    }

    .check {
        display: none;
    }

    .text {
    }

    .button {
        height: 45px;
        line-height: 45px;
        background: #666;
        width: 90%;
        margin: 10px auto;
        text-align: center;
        cursor: pointer;
        color: #FFF;
    }
</style>
