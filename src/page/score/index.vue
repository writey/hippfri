<template>
  <el-container>
    <el-main>
      {{ currentIndex + 1 + ":" + itemDetail[currentIndex].text }}
      <el-button 
        v-for="(answer) in itemDetail[currentIndex].answers"
        :class="[{'false': answer.id == userAnswerArr[currentIndex] && !answer.isAnswer}, 
          {'true': answer.isAnswer}, 'item']"
        :key="answer.id">
        {{ answer.text }}
      </el-button>
    </el-main>
    <el-footer>
      <ul>
        <li v-for="(item, index) in itemDetail"
          :key="item.id"
          :class="item.answerId == userAnswerArr[index]? 'true': 'false'"
          @click="currentIndex = index"> {{ index + 1 }}
        </li>
      </ul>
      <div v-if="itemDetail[currentIndex].notes">解析：{{ itemDetail[currentIndex].notes }}</div>
    </el-footer>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapState(['itemDetail', 'userAnswerArr'])
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    font-size: 20px;
    margin: .5rem;
    display: inline-block;
  }
}
.true {
  color: aquamarine;
}
.false {
  /* color: brown  */
  color: #ff6547 !important;
}
.item {
  width: 80%;
  margin: 1rem;
  padding: 1rem;
}
</style>