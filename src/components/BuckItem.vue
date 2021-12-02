<template>
  <div class="buck-container">
    <div :style="'background:' + color" class="name-container">
      <h3 class="buck-name">{{ name }}</h3>
    </div>
    <div @click="selectBuck" class="image-container">
      <img
        class="buck-top__img"
        :class="selected ? 'selected' : ''"
        :src="require(`@/assets/img/bucks/buck_top/wastetop_${color}.png`)"
      />
      <img
        :ref="color"
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
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    currentItem: function () {
      return this.$store.state.currentItem;
    },
    location: function () {
      const currentRect = this.$refs[`${this.color}`].getBoundingClientRect();
      return {
        top: currentRect.top,
        left: currentRect.left,
      };
    },
  },
  methods: {
    selectBuck() {
      const isValid = this.currentItem.type === this.name;
      this.animateBuck();
      this.$store.dispatch("answerHandler", isValid);
      return setTimeout(() => {
        return this.$store.dispatch(
          "setCurrentItem",
          trashList[randomInteger(0, trashList.length - 1)]
        );
      }, 500);
    },
    animateBuck() {
      this.selected = true;
      setTimeout(() => {
        this.selected = false;
      }, 600);
      this.$store.dispatch("setBuckLocation", this.location);
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
    &.selected {
      animation-name: slideTopImage;
      animation-duration: 0.5s;
      animation-iteration-count: 2;
      animation-direction: alternate;
    }
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
@keyframes slideTopImage {
  from {
    top: 20px;
  }

  to {
    top: -25px;
  }
}
</style>
