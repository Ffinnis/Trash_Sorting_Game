import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentItem: {},
    buckLocation: {},
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
    resetAnswers(state) {
      state.wrongAnswer = 0;
      return (state.correctAnswer = 0);
    },
    setBuckLocation(state, payload) {
      return (state.buckLocation = payload);
    },
  },
  actions: {
    setCurrentItem({ commit }, payload) {
      return commit("setCurrentItem", payload);
    },
    answerHandler({ commit }, bool) {
      return commit("answerHandler", bool);
    },
    resetAnswers({ commit }) {
      return commit("resetAnswers");
    },
    setBuckLocation({ commit }, payload) {
      return commit("setBuckLocation", payload);
    },
  },
  modules: {},
});
