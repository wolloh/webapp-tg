<template>
  <div class="game-field">
    <PlayerHand :cards="botCards" :is-bot="true"/>
    <ActiveBoard :cards="cardsOnBoard"/>
    <PlayerHand :cards="playerCards"/>
  </div>
</template>

<script>
import PlayerHand from './PlayerHand.vue';
import ActiveBoard from './ActiveBoard.vue';

export default {
  name: "GameField",
  components: {
    PlayerHand,
    ActiveBoard
  },
  props: {
    cardsOnBoard: {
      type: Array,
      default() { return [
        {id: 0, name: "Жаба", rank: 12},
        {id: 1, name: "Аист", rank: 7},
      ]}
      // default: () => []
    },
    playerCards: {
      type: Array,
      default() { return [
        {id: 0, name: "Ведро", rank: 2},
        {id: 1, name: "Ложка", rank: 3},
        {id: 2, name: "Крот", rank: 3},
        {id: 3, name: "Дупло", rank: 4},
        {id: 4, name: "Спица", rank: 6},
        {id: 5, name: "Кулак", rank: 7},
        {id: 6, name: "Камень", rank: 7},
        {id: 7, name: "Ящерица", rank: 8},
        {id: 8, name: "Рогатка", rank: 9},
        {id: 9, name: "Солнце", rank: 11},
      ]}
      // default: () => []
    },
    botCards: {
      type: Array,
      default() { return [
        {id: 10, name: "Card 1", rank: 5},
        {id: 11, name: "Card 2", rank: 7},
        {id: 12, name: "Card 3", rank: 5},
        {id: 13, name: "Card 4", rank: 7},
        {id: 14, name: "Card 5", rank: 5},
        {id: 15, name: "Card 6", rank: 7},
        {id: 16, name: "Card 7", rank: 5},
        {id: 17, name: "Card 8", rank: 7},
        {id: 18, name: "Card 9", rank: 5},
        {id: 19, name: "Card 10", rank: 7},
      ]}
      // default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.game-field {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
