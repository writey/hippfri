<template>
  <div>
    <el-container :class="switchClass == 1 ? 'switch': ''" v-loading="true">
      <!-- <el-header>
        <router-link to="/" tag="el-link" :class="'el-icon-arrow-left'" type="primary" :underline="false">返回</router-link>
      </el-header> -->
      <el-main >
        <p :class="'title'">{{itemDetail[itemIndex].text}}</p>
        <el-button v-for="(item, index) in itemDetail[itemIndex].answers" :key="item.id"
          @click.prevent="answerId = item.id; activeClass = index"
          :class="['item', {'active': activeClass == index || answerId == item.id }]">
          {{item.text}}
        </el-button>
      </el-main>
      <el-footer>
        <el-link type="primary" :underline="false" v-if="itemIndex > 0" @click="previous">上一题</el-link>
        <el-link type="primary" :underline="false" v-if="itemIndex < itemDetail.length - 1" @click="next">下一题</el-link>
        <el-link type="primary" :underline="false" v-else @click="submitAnswer">提交</el-link>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      answerId: null,
      activeClass: -1,
      switchClass: 0
    };
  },
  computed: mapState(['itemDetail', 'itemIndex', 'userAnswerArr']),
  methods: {
    ...mapMutations(['goItem', 'initializeData']),
    ...mapActions([ 'randomAnswer', 'nextNum', 'packItemArr']),
    next() {
      if (this.answerId == null) return this.$alert('还没有选择答案', '');
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
      if (this.answerId == null) return this.$alert('还没有选择答案', '');
      this.nextNum({ itemIndex: this.itemIndex, goItemIndex: this.itemIndex + 1, answerId: this.answerId });
      this.answerId = null;
      this.$router.push('score');
    }
  },
  created () {
    this.initializeData();
    // this.$axios.get('/static/data/data.json').then(data => data);
    const query = new this.$AV.Query('items');
    query.equalTo('subject', '计算机软件');
    query.find().then(items => this.packItemArr(items));
  }
}
</script>
<style lang="scss">
.title {
  margin-bottom: 2rem;
  font-size: 16px;
  font-weight: 700;
}
.item {
  width: 80%;
  margin: 1rem;
  padding: 1rem;
}
.active {
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-footer {
  a {
    margin: 1rem;
  }
}
main {
  transition: opacity .3s ease-out;
}
.switch {
  opacity: 0;
}
</style>