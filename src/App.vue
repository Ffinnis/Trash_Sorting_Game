<template>
  <div id="app">
    <game-form />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    GameForm: () => import("@/components/GameForm"),
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cbc2c2;
}
</style>
