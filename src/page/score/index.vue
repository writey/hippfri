<template>
  <div>
    <ul>
      <li 
        v-for="(item, index) in itemDetail" 
        :key="item.id" 
        :class="item.answerId == userAnswerArr[index]? 'true': 'false'"
        @click="currentIndex = index"> {{ item.text }}
      </li>
    </ul>
    <div>
      {{ itemDetail[currentIndex] }}
      <div>
        <ul>
          <li v-for="(answer) in itemDetail[currentIndex].answers" 
            :class="[{'false': answer.id == userAnswerArr[currentIndex] && !answer.isAnswer}
              , {'true': answer.isAnswer}]"
            :key="answer.id">
            {{ answer.text }}
          </li>
        </ul>
      </div>
      <div v-if="itemDetail[currentIndex].notes">解析：{{ itemDetail[currentIndex].notes }}</div>
    </div>
  </div>
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

<style>
.true {
  color: aquamarine;
}
.false {
  color: brown;
}
</style>