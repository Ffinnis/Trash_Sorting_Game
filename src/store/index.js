import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentItem: {},
    correctAnswer: 0,
    wrongAnswer: 0,
  },
  mutations: {
    setCurrentItem(state, payload) {
      return (state.currentItem = payload);
    },
    answerHandler(state, bool) {
      if (bool) {
        return (state.correctAnswer += 1);
      }
      return (state.wrongAnswer += 1);
    },
  },
  actions: {
    setCurrentItem({ commit }, payload) {
      return commit("setCurrentItem", payload);
    },
    answerHandler({ commit }, bool) {
      return commit("answerHandler", bool);
    },
  },
  modules: {},
});
