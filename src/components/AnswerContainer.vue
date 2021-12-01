<template>
  <div
    class="answer-container"
    :class="answerType === 'wrongAnswer' ? 'wrong' : 'correct'"
  >
    <img
      class="answer-img"
      :src="
        answerType === 'wrongAnswer'
          ? require('@/assets/img/no.png')
          : require('@/assets/img/ok.png')
      "
      alt=""
    />
    <div class="counter">
      {{ counterAnswer }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerContainer",
  props: {
    answerType: {
      type: String,
      required: true,
    },
  },
  computed: {
    counterAnswer: function () {
      if (this.answerType === "wrongAnswer") {
        return this.$store.state.wrongAnswer;
      }
      return this.$store.state.correctAnswer;
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-container {
  padding: 12px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  min-width: 70px;
  gap: 0 10px;
  &.wrong {
    background: #c62c8e;
  }
  &.correct {
    background: #99db25;
  }
  .answer-img {
    width: 20px;
  }
  .counter {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
