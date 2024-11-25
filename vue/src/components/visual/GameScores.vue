<template>
  <div class="scores">
    <h4 class="scores__player">Вы: 5</h4>
    <h4 class="scores__delimeter">/</h4>
    <h4 class="scores__bot">Бот: 5</h4>
  </div>
</template>

<script>
export default {
  name: "GameScores"
}
</script>

<style lang="less" scoped>
.scores {
  &__player, &__delimeter, &__bot {
    display: inline;
    font-size: 32px;
  }

  &__delimeter {
    margin: 0 15px;
  }
}
</style>
