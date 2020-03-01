export default {
  initializeData(state) {
    state.itemIndex = 0;
    state.userAnswerArr = [];
  },
  randomAnswer({state}, index) {    // 打乱答案数组
    state.itemDetail[index].answers = state.itemDetail[index].answers.sort(() => .5 - Math.random());
  },
  goItem(state, index) {
    state.itemIndex = index;
  },
  remeberAnswer(state, { itemIndex, answerId }) {
    console.log(`${itemIndex} itId, ansId ${answerId}`);
    state.userAnswerArr[itemIndex] = answerId;
  }
}