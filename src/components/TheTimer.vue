<template>
  <svg width="180" height="180" viewBox="0 0 42 42" class="timer">
    <circle
      class="donut-hole"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="#fff"
    ></circle>
    <circle
      class="donut-ring"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#d2d3d4"
      stroke-width="1"
    ></circle>
    <circle
      class="donut-segment"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#cf83cf"
      stroke-width="1"
      stroke-dasharray="100"
      :stroke-dashoffset="percentage"
    ></circle>
  </svg>
</template>

<script>
export default {
  name: "TheTimer",
  data() {
    return {
      percentage: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.percentage += 0.25;
    }, 50);
  },
  watch: {
    percentage(newVal) {
      if (newVal > 100) {
        this.$emit("change", true);
      }
    },
  },
};
</script>

<style scoped>
.donut-segment {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(265deg);
}
</style>
