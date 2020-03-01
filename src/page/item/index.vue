<template>
  <div>
    item page
    <div class="title"> {{itemDetail[itemIndex].text}}
      <ul>
        <li v-for="(item) in itemDetail[itemIndex].answers" :key="item.id">
          <a @click.prevent="answerId = item.id">
            {{item.text}}
          </a>
        </li>
      </ul>
    </div>
    <button v-if="itemIndex < itemDetail.length - 1" @click="next">下一题</button>
    <button v-else @click="submitAnswer">提交</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      answerId: null
    };
  },
  computed: mapState(['itemDetail', 'itemIndex']),
  methods: {
    ...mapMutations(['']),
    ...mapActions([ 'randomAnswer', 'nextNum', 'initializeData', 'packItemArr']),
    next() {
      if (this.answerId == null) return;  // 没有选择答案
      this.nextNum({ itemIndex: this.itemIndex, goItemIndex: this.itemIndex + 1, answerId: this.answerId });
      this.answerId = null;
      this.randomAnswer(this.itemIndex);
    },
    submitAnswer() {
      if (this.answerId == null) return;  // 没有选择答案
      this.nextNum({ itemIndex: this.itemIndex, goItemIndex: this.itemIndex + 1, answerId: this.answerId });
      this.answerId = null;
      this.$router.push('score');
    }
  },
  created () {
    this.initializeData();
    this.packItemArr();
  }
}
</script>
<style lang="scss">

</style>