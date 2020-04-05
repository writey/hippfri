<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack">
      </el-page-header>
    </el-header>
    <el-main>
      {{ currentIndex + 1 + ":" + itemDetail[currentIndex].attributes.text }}
      <div 
        v-for="(answer) in itemDetail[currentIndex].attributes.answers"
        :class="[{'false': answer.id == userAnswerArr[currentIndex] && !answer.isAnswer}, 
          {'true': answer.isAnswer}, 'item']"
        :key="answer.id">
        {{ answer.text }}
      </div>
      <ul>
        <li v-for="(item, index) in itemDetail"
          :key="item.id"
          :class="item.attributes.answerId == userAnswerArr[index]? 'true': 'false'"
          @click="currentIndex = index"> {{ index + 1 }}
        </li>
      </ul>
      <div class="notes">
        <div v-if="itemDetail[currentIndex].attributes.notes">
          <div v-for="(item, index) in itemDetail[currentIndex].attributes.notes" :key="index">
            <label class="name">{{item.name}}</label>
            <p class="note">{{item.text}}</p>
          </div>
        </div>
        <el-input placeholder="添加解析" v-model="myNote">
          <el-button slot="append" @click="addNote" icon="el-icon-plus"></el-button>
        </el-input>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // 当前题目
      currentIndex: 0,
      myNote: ''
    }
  },
  computed: {
    ...mapState(['itemDetail', 'userAnswerArr', 'token'])
  },
  created () {
    console.log(this.itemDetail);
    if (!this.itemDetail || this.itemDetail.length == 0) {
      this.$router.push('/home');
    }
  },
  methods: {
    goBack() {
      this.$router.push('/home');
    },
    addNote() {
      if (this.myNote == '') return;
      const itemId = this.itemDetail[this.currentIndex].id;
      const name = this.token.name;
      const text = this.myNote;
      const item = this.$AV.Object.createWithoutData('items', itemId);
      item.add('notes', {'name': name, 'text': text});
      item.save();
      this.itemDetail[this.currentIndex].attributes.notes.push({'name': name, 'text': text});
      this.myNote = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
    height: 100%;
    padding: 1.5em;
}
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
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  transition: .1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
}
.notes {
  width: 100%;
  margin: .3em;
  padding: .5em;
  text-align: left;
  .note {
    padding-left: .5em;
    border-left: 3px solid #d3d3d3;
  }
}
</style>