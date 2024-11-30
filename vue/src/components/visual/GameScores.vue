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
    <ResultGameModal v-if="gameEnded" ref="modal" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResultGameModal from '../modals/ResultGameModal.vue';
import { WinnerStates } from '@/core/constants';
export default {
  name: "GameScores",
  components: {
    ResultGameModal
  },
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
  updated() {
    if (this.getWinner != WinnerStates.NONE) {
      this.$refs.modal.show = true
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
