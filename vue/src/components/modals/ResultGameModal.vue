<template>
    <div div v-if="show">
        <ModalComponent>
      <div class="result-modal">
        <h2 class="result-text">
            Результат игры
        </h2>
        <p class="winner">
            {{this.getResultMessage}}
        </p>
        <button class="restart-button" 
        @click="restartGame">
            Начать заново
        </button>
      </div>
    </ModalComponent>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
import { WinnerStates } from "@/core/constants";
import ModalComponent from "@/components/parts/Modal";

export default {
    name: "ResultGameModal",
    components: {
        ModalComponent
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        restartGame () {
            this.getEngine.startNewGame();
            this.show = false
        }
    },
    
    computed: {
        ...mapGetters('game_engine', [
      'getEngine',
    ]),
        getResultMessage() 
        {
            if (this.getEngine.winner === WinnerStates.PLAYER_WINS) {
                return 'Вы выиграли!';
            } 
            else if (this.getEngine.winner === WinnerStates.BOT_WINS) {
                return 'Противник выиграл!';
            }
            else if (this.getEngine.winner === WinnerStates.DRAW) {
                return 'Ничья!';
            }
            else {
                return 'Ошибка';
            }
        },
    },
    
};
</script>

<style scoped>
.result-modal {
    background-color: #C6DABF;
    border: solid 2px #216652;
    border-radius: 8px;
    padding: 15px;
    min-width: 420px;
    max-width: 480px;
    position: absolute;
    top: 50%;
    left: 50%;text-align: center;
    transform: translate(-50%, -50%);
}

.result-text {
    font-weight: 400;
    font-style: normal;
    color: #000000;
    margin: 0;
}

.winner {
    font-family: "Neucha", cursive;
}

.restart-button {
  padding: 10px 15px;
  background-color: #F3E9D2;
  border: solid 2px #999488;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Neucha", cursive;
}
</style>