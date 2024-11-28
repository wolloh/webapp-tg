<template>
  <div class="game-field">
    <PlayerHand :cards="this.botCards" :is-bot="true"/>
    <ActiveBoard :cards="cardsOnBoard"/>
    <PlayerHand :cards="this.playerCards"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      handSize: 11,
      botCards: null,
      playerCards: null,
      cardsOnBoard: null
    }
  },
  created() {
    this.generateBotCards()
    this.generatePlayerCards()
  },
  methods: {
    ...mapActions('deck', [
      'popCards'
    ]),
    generateBotCards() {
      this.popCards(this.handSize).then((response) => {
        this.botCards = response
      })
    },
    generatePlayerCards() {
      this.popCards(this.handSize).then((response) => {
        this.playerCards = response
      })
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
