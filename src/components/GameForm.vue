<template>
  <div class="game-form">
    <h1 class="game-title">
      Выбери правильный бак для <br />
      сортировки мусора!
    </h1>
    <div class="row">
      <answer-container v-show="isStarted" answerType="wrongAnswer" />
      <game-selector @change="isStarted = $event" />
      <answer-container v-show="isStarted" answerType="correctAnswer" />
    </div>
    <ul class="buck-list">
      <li class="buck-item">
        <buck-item name="Второсырьё" color="yellow" />
      </li>
      <li class="buck-item">
        <buck-item name="Смешанные" color="green" />
      </li>
      <li class="buck-item">
        <buck-item name="Бытовые" color="blue" />
      </li>
      <li class="buck-item">
        <buck-item name="Опасные" color="orange" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GameForm",
  components: {
    BuckItem: () => import("./BuckItem"),
    GameSelector: () => import("./GameSelector"),
    AnswerContainer: () => import("./AnswerContainer"),
  },
  data() {
    return {
      isStarted: false,
    };
  },
};
</script>

<style scoped lang="scss">
.game-form {
  padding: 15px 40px 0 40px;
  background: #fff;
  border-radius: 20px;
  max-width: 993px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-title {
  font-size: 32px;
  line-height: 40px;
  color: #4d4280;
  text-align: center;
}
.buck-list {
  display: flex;
  align-items: center;
  gap: 0 20px;
}
</style>
