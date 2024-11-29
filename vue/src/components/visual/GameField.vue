<template>
  <div class="game-field">
    <PlayerHand :cards="botCards" :is-bot="true"/>
    <ActiveBoard :cards="cardsOnBoard"/>
    <PlayerHand :cards="playerCards"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { MAX_CARDS_IN_HAND } from '@/core/constants.js'
import PlayerHand from './PlayerHand.vue';
import ActiveBoard from './ActiveBoard.vue';

export default {
  name: "GameField",
  components: {
    PlayerHand,
    ActiveBoard
  },
  data() {
    return {
      handSize: MAX_CARDS_IN_HAND
    }
  },
  computed: {
    ...mapGetters('game_engine', [
      'getPlayerCards',
      'getBotCards',
      'getCardsOnBoard',
    ]),
    botCards() {
      return this.getBotCards
    },
    playerCards() {
      return this.getPlayerCards
    },
    cardsOnBoard() {
      return this.getCardsOnBoard
    }
  },
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
