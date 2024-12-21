<template>
  <div class="game">
    <GameStatus />
    <GameField />
  </div>
</template>

<script>
import GameField from "../visual/GameField.vue";
import GameStatus from "../visual/GameStatusHeader.vue";
import { gameModals } from "@/mixins/modals";

export default {
  name: 'HomePage',
  mixins: [gameModals],
  components: {
    GameField,
    GameStatus
  },

  mounted() {
    
    let subscribe = this.checkSubscribe();

      if (subscribe) {
        this.openStartGameModal();
      }
      else {
        this.openNoSubscriptionModal();
      }
  },
  
  methods: {
    checkSubscribe() {
      //TODO: сделать проверку пользователя
      let check = false
      return check;
    },


  }

}
</script>

<style lang="less" scoped>
.game {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
