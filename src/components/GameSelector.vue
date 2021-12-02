<template>
  <div class="game">
    <button v-show="timerHandler" @click="startGame" class="start-button">
      Начать!
    </button>
    <div v-if="!timerHandler" class="game-container">
      <the-timer @change="timerHandler = $event" />
      <img
        :src="require(`@/assets/img/trash/${this.currentItem.img_src}.svg`)"
        class="question-image"
        ref="question-image"
        v-if="show"
      />
    </div>
  </div>
</template>

<script>
import { trashList } from "@/utils/trashList";
import { randomInteger } from "@/utils/randomInteger";

export default {
  name: "GameSelector",
  components: {
    TheTimer: () => import("./TheTimer"),
  },
  data() {
    return {
      timerHandler: true,
      show: true,
    };
  },
  computed: {
    currentItem: function () {
      return this.$store.state.currentItem;
    },
    selectedBuckLocation: function () {
      return this.$store.state.buckLocation;
    },
    imageLocation: function () {
      const currentRect = this.$refs["question-image"].getBoundingClientRect();
      return {
        top: currentRect.top,
        left: currentRect.left,
      };
    },
  },
  methods: {
    startGame() {
      this.timerHandler = false;
      this.$emit("change", true);
      return this.$store.dispatch(
        "setCurrentItem",
        trashList[randomInteger(0, trashList.length - 1)]
      );
    },
  },
  watch: {
    timerHandler(newVal) {
      if (newVal) {
        this.$store.dispatch("resetAnswers");
        return this.$emit("change", false);
      }
    },
    selectedBuckLocation(newVal) {
      this.$refs["question-image"].style.top = `${
        newVal.top - this.imageLocation.top + 20
      }px`;
      this.$refs["question-image"].style.left = `${
        newVal.left - this.imageLocation.left + 50
      }px`;
      setTimeout(() => {
        this.show = false;
      }, 500);
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
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
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-container {
  position: relative;
  .question-image {
    position: absolute;
    width: 90px;
    height: 90px;
    left: 45px;
    top: 45px;
    transition: top, left, 0.5s linear;
  }
}
</style>
