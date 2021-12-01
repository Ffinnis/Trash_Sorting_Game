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
    };
  },
  computed: {
    currentItem: function () {
      return this.$store.state.currentItem;
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
        this.$emit("change", false);
      }
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
  }
}
</style>
