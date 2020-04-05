export default {
  initializeData(state) {
    state.itemIndex = 0;
    state.userAnswerArr = [];
    state.itemDetail = [];
  },
  randomAnswer({state}, index) {    // 打乱答案数组
    state.itemDetail[index].attributes.answers = state.itemDetail[index].attributes.answers.sort(() => .5 - Math.random());
  },
  goItem(state, index) {
    state.itemIndex = index;
  },
  remeberAnswer(state, { itemIndex, answerId }) {
    console.log(`${itemIndex} itId, ansId ${answerId}`);
    state.userAnswerArr[itemIndex] = answerId;
  },
  addToken(state, user) {
    state.token = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}