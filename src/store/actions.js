export default {
  randomAnswer({state}, index) {    // 打乱答案数组
    state.itemDetail[index].answers = state.itemDetail[index].answers.sort(() => .5 - Math.random());
  },
  initializeData(state) {
    state.itemIndex = 0;
    state.userAnswerArr = [];
  },
  nextNum({ commit, state }, { itemIndex, goItemIndex, answerId }) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('remeberAnswer', { itemIndex, answerId });
    if (state.itemIndex < state.itemDetail.length - 1) {
      commit('goItem', goItemIndex);
    }
  },
  packItemArr({state}) {
    state.itemDetail = state.itemDetail.filter(item => item.typeId == 1).sort(() => .5 - Math.random());
  }
}