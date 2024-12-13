<template>
  <ModalComponent>
    <div class="start-modal scroll-modal">
      <div v-if="!ratingClicked">
        <h2 class="start-modal__welcome">
          Добро пожаловать!
        </h2>
        <button class="button-green" @click="() => startGame()">
          Новая игра
        </button>
        <button class="button-green" @click="() => changeRatingFlag()">
          Топ игроков
        </button>
      </div>
      <div v-else>
        <svg 
          class="start-modal__icon-back" 
          viewBox="0 0 36 36" 
          @click="() => changeRatingFlag()"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
        <UserRating title="Топ-10 игроков" :users="sortedRating" />
      </div>
    </div>
  </ModalComponent>
</template>

<script>
import { mapActions } from "vuex";
import ModalComponent from "@/components/parts/Modal";
import UserRating from "../parts/UserRating.vue";
import { gameModals } from "@/mixins/modals";

export default {
  name: "StartGameModal",
  mixins: [gameModals],
  components: {
    ModalComponent,
    UserRating
  },
  data() {
    return {
      ratingClicked: false,
    }
  },
  props: {
    params: Object,
    ratingUsers: {
      type: Array,
      // default: () => []
      default() {
        return [
          {
            name: "Семен",
            scores: 10,
            position: 4
          },
          {
            name: "kkkkkk",
            scores: 25,
            position: 3
          },
          {
            name: "Фёдор",
            scores: 1210,
            position: 1
          },
          {
            name: "superBigDickGun",
            scores: 2,
            position: 5
          },
          {
            name: "Елена Королёва",
            scores: 121,
            position: 2
          },
          {
            name: "Семен",
            scores: 12,
            position: 4
          },
          {
            name: "kkkkkk",
            scores: 25,
            position: 3
          },
          {
            name: "Фёдор",
            scores: 1210,
            position: 1
          },
          {
            name: "superBigDickGun",
            scores: 10,
            position: 5
          },
          {
            name: "Елена Королёва",
            scores: 121,
            position: 2
          }
        ]
      }
    }
  },
  computed: {
    sortedRating() {
      const copy = this.ratingUsers
      return copy.sort((a, b) => b.scores - a.scores)
    }
  },
  methods: {
    ...mapActions('gameEngine', [
      'startNewGame'
    ]),

    checkSubscribe() {
      //TODO: сделать проверку пользователя
      let check = false
      return check;
    },

    startGame() {
      let subscribe = this.checkSubscribe();

      if (subscribe) {
        this.startNewGame();
      }
      else {
        this.openNoSubscriptionModal();
      }
      this.$emit('close');
    },

    changeRatingFlag() {
      this.ratingClicked = !this.ratingClicked
    }
  },
};
</script>

<style lang="less">
.start-modal {
  &__welcome {
    margin-bottom: 10px;
    color: #17211E;
    font-size: 38px;

    @media(max-width: 540px) {
      font-size: 28px;
    }
  }

  &__icon-back {
    width: 36px;
    height: 36px;
    display: block;
    justify-self: left;
    fill: none;
    stroke: #17211E;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    cursor: pointer;
    margin-bottom: -41px;
  }
}

.scroll-modal {
  background-color: #F3E9D2;
  border: solid 2px #999488;
  border-radius: 8px;
  padding: 53px 45px 71px 45px;
  width: 490px;
  max-height: 497px;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  overflow-y: auto;

  @media(max-width: 860px) {
    width: 390px;
  }

  @media(max-width: 540px) {
    min-width: 300px;
    max-width: 362px;
    padding: 33px 15px 41px 15px;
    box-sizing: border-box;
  }

  @media(max-width: 370px) {
    max-width: 342px;
  }

  &::-webkit-scrollbar {
    width: 7px;

    @media(max-width: 540px) {
      width: 0;
    }
  }

  &::-webkit-scrollbar-track {
    background: #F3E9D2;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0beb3;
    border-radius: 25px;
  }
}

.button-green {
  width: 325px;
  padding: 17px 35px;
  background-color: #216652;
  border: none;
  border-radius: 8px;
  font-size: 32px;
  color: #EFF1F4;
  cursor: pointer;
  font-family: 'Rubik Spray Paint', system-ui;
  margin-top: 15px;

  @media(max-width: 540px) {
    font-size: 24px;
    box-sizing: border-box;
    width: 260px;
    margin-top: 12px;
  }
}
</style>
