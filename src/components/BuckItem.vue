<template>
  <div class="buck-container">
    <div :style="'background:' + color" class="name-container">
      <h3 class="buck-name">{{ name }}</h3>
    </div>
    <div @click="selectBuck" class="image-container">
      <img
        class="buck-top__img"
        :src="require(`@/assets/img/bucks/buck_top/wastetop_${color}.png`)"
      />
      <img
        class="buck-img"
        :src="require(`@/assets/img/bucks/wastebox_${color}.png`)"
      />
    </div>
  </div>
</template>

<script>
import { trashList } from "@/utils/trashList";
import { randomInteger } from "@/utils/randomInteger";
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
  computed: {
    currentItem: function () {
      return this.$store.state.currentItem;
    },
  },
  methods: {
    selectBuck() {
      const isValid = this.currentItem.type === this.name;
      this.$store.dispatch("answerHandler", isValid);
      return this.$store.dispatch(
        "setCurrentItem",
        trashList[randomInteger(0, trashList.length - 1)]
      );
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
  .buck-img,
  .buck-top__img {
    width: 100%;
    height: 125px;
    object-fit: contain;
    position: absolute;
    top: 55px;
  }
  .buck-top__img {
    width: 70px;
    top: 20px;
    left: 27px;
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
