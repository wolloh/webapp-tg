<template>
  <div class="scores">
    <h4 class="scores__player">
      Вы: {{ getPlayerScore }}
    </h4>
    <h4 class="scores__delimeter">
      /
    </h4>
    <h4 class="scores__bot">
      Бот: {{ getBotScore }}
    </h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { WinnerStates } from '@/core/constants';
import { gameModals } from '@/mixins/modals';

export default {
  name: "GameScores",

  mixins: [gameModals],

  computed: {
    ...mapGetters('gameEngine', [
      'getPlayerScore',
      'getBotScore',
      'getWinner'
    ]),

    gameEnded() {
      return this.getWinner != WinnerStates.NONE;
    }
  },

  watch: {
    gameEnded(ended) {
      if(ended) {
        this.openResultGameModal();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.scores {
  &__player, &__delimeter, &__bot {
    display: inline;
  }

  &__delimeter {
    margin: 0 15px;
  }
}
</style>
