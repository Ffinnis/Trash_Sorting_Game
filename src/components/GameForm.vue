<template>
  <div class="game-form">
    <h1 class="game-title">
      Выбери правильный бак для <br />
      сортировки мусора!
    </h1>
    <button class="start-button">Начать!</button>
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
.start-button {
  border-radius: 50%;
  padding: 18px 5px;
  background-color: #ac8cdd;
  border: none;
  color: #fff;
  font-size: 30px;
  line-height: 38px;
  width: 140px;
  height: 140px;
  cursor: pointer;
  font-weight: bold;
  margin: 60px 0 0;
}
.buck-list {
  display: flex;
  align-items: center;
  gap: 0 20px;
}
</style>
