<template>
  <div>
    <el-container :class="switchClass == 1 ? 'switch': ''" >
      <el-header>
        <el-page-header @back="goBack" content="">
        </el-page-header>
      </el-header>
      <el-main >
        <p :class="'title'">{{itemIndex+1}}:{{itemDetail[itemIndex].attributes.text}}</p>
        <div v-for="(item, index) in itemDetail[itemIndex].attributes.answers" :key="item.id"
          @click.prevent="answerId = item.id; activeClass = index"
          :class="['item', {'active': activeClass == index || answerId == item.id }]">
          {{item.text}}
        </div>

        <div class="option">
          <el-link type="primary" :underline="false" v-if="itemIndex > 0" @click="previous">上一题</el-link>
          <el-link type="primary" :underline="false" v-if="itemIndex < itemDetail.length - 1" @click="next">下一题</el-link>
          <el-link type="primary" :underline="false" v-else @click="submitAnswer">提交</el-link>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      // 答案id
      answerId: null,
      // 选择的答案样式
      activeClass: -1,
      // 切换题目样式
      switchClass: 0
    };
  },
  computed: mapState(['itemDetail', 'itemIndex', 'userAnswerArr']),
  methods: {
    ...mapMutations(['goItem', 'initializeData']),
    ...mapActions([ 'randomAnswer', 'nextNum', 'packItemArr']),
    next() {
      if (this.answerId == null) return this.$alert('还没有选择答案');
      this.switchClass = 1;
      setTimeout(() => {
        this.nextNum({ itemIndex: this.itemIndex, goItemIndex: this.itemIndex + 1, answerId: this.answerId });
        this.answerId = this.userAnswerArr[this.itemIndex];
        this.activeClass = -1;
        this.randomAnswer(this.itemIndex);
        this.switchClass = 0;
      }, 500);
    },
    previous() {
      this.switchClass = 1;
      setTimeout(() => {
        this.switchClass = 0;
        this.goItem(this.itemIndex - 1);
        this.answerId = this.userAnswerArr[this.itemIndex];
        this.activeClass = - 1;
      }, 500);
    },
    submitAnswer() {
      if (this.answerId == null) return this.$alert('还没有选择答案');
      this.nextNum({ itemIndex: this.itemIndex, goItemIndex: this.itemIndex + 1, answerId: this.answerId });
      this.answerId = null;
      this.$router.push('score');
    },
    goBack() {
      this.$router.push('/home');
    }
  },
  created () {
    console.log(this.itemDetail);
    if (!this.itemDetail || this.itemDetail.length == 0) {
      this.$router.push('/home');
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  transition: opacity .3s ease-out;
  height: 100%;
  padding: 1.5em;
  box-sizing: border-box;
}
.title {
  margin-bottom: 2rem;
  font-size: 16px;
  font-weight: 700;
}
.item {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  transition: .1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
}
.active {
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.option {
  a {
    margin: 1rem;
  }
}
.switch {
  opacity: 0;
}
</style>