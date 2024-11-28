<template>
  <div class="board">
    <div class="board__cards">
      <GameCard 
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
        :on-board="true"
      />
    </div>
  </div>

</template>

<script>
import GameCard from './GameCard.vue';

export default {
  name: "ActiveBoard",
  components: {
    GameCard
  },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.board {
  height: inherit;
  padding: 20px;
  background-color: #C6DABF;
  border: solid 1px #216652;

  &__cards {
    height: inherit;
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    margin: auto;
    align-items: center;
  }
}

@media(max-width: 560px) or (max-height: 580px){
  .board {
    padding: 10px;
    
    &__cards {
      max-width: 286px;
    }
  }
}
</style>
