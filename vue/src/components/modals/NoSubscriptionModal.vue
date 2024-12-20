<template>
  <ModalComponent>
    <div class="no-subscription-modal">
      <svg 
          class="no-subscription-modal__icon-back" 
          viewBox="0 0 36 36" 
          @click="() => back()">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      <h2 class="no-subscription-modal__title">
        Подписка отсутсвует!
      </h2>
      <p class="no-subscription-modal__body">
        Чтобы начать игру вам необходимо подписаться на наш Telegram канал. Приложение при этом будет закрыто.
      </p>
      <button class="no-subscription-modal__button" @click="() => subscribe()">
        Подписаться
      </button>
    </div>
  </ModalComponent>
</template>


<script>
import { mapActions } from "vuex";
import ModalComponent from "@/components/parts/Modal";
import { gameModals } from "@/mixins/modals";

export default {
  name: "NoSubscriptionModal",
  mixins: [gameModals],
  
  components: {
    ModalComponent,
  },

  props: {
    params: Object
  },

  methods: {
    ...mapActions('gameEngine', [
      'startNewGame'
    ]),

    subscribe() {
      const telegramUrl = "https://t.me/MiniAppCardGame";
      window.open(telegramUrl, "_blank");
      this.openStartGameModal();
      this.$emit('close');
    },
    
    back() {
      this.openStartGameModal();
      this.$emit('close');
    }
  }
}

</script>

<style lang="less" scoped>
.no-subscription-modal {
  background-color: #f3e9d2;
  border: solid 2px #999488;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  
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
  
  &__title {
    font-weight: 400;
    font-style: normal;
    color: #000000;
    margin: 0;

    @media(max-width: 540px) {
      font-size: 28px;
    }
  }

  &__body {
    font-family: "Neucha", cursive;
  }

  &__button {
      padding: 10px 15px;
      background-color: #216652;
      border: solid 2px #216652;
      border-radius: 8px;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
      font-family: "Neucha", cursive;

      @media(max-width: 540px) {
        font-size: 24px;
        box-sizing: border-box;
        width: 260px;
        margin-top: 12px;
      }
    }
}

</style>