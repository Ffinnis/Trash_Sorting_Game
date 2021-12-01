<template>
  <div class="buck-container">
    <div :style="'background:' + color" class="name-container">
      <h3 class="buck-name">{{ name }}</h3>
    </div>
    <div class="image-container">
      <img
        class="buck-img"
        :src="require(`@/assets/img/bucks/wastebox_${color}.png`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BuckItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.buck-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  .name-container {
    border-radius: 20px;
    padding: 5px 10px;
    min-width: 125px;
    text-align: center;
    margin: 70px 0 -30px;
    .buck-name {
      color: #fff;
      font-size: 16px;
    }
  }
}
.image-container {
  height: 125px;
  position: relative;
  width: 125px;
  .buck-img {
    width: 100%;
    height: 125px;
    object-fit: contain;
    position: absolute;
    top: 55px;
  }
  &::after {
    width: 125px;
    height: 60px;
    background: #cbc2c2;
    content: "";
    position: absolute;
    top: 125px;
  }
}
</style>
