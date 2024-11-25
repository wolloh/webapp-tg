<template>
  <div class="game">
    <GameStatus />
    <GameField />
    <ModalContainer />
  </div>
</template>

<script>
import ModalContainer from "@/components/parts/ModalContainer";
import GameField from "./visual/GameField.vue";
import GameStatus from "./visual/GameStatusHeader.vue";

export default {
  components: {
    ModalContainer,
    GameField,
    GameStatus
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');

body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  font-weight: 400;
  font-style: normal;
  color: #EFF1F4;
  margin: 0;
}

h1, h3, h5 {
  font-family: "Rubik Spray Paint", system-ui;
}

h2, h4 {
  font-family: "Neucha", cursive;
}

.game {
  width: 100%;
  height: 100vh;
  min-width: 468px;
  min-height: 738px;
  display: flex;
  flex-direction: column;
}
</style>
