<template>
  <ModalComponent>
    <div class="no-subscription-modal">
      <h2 class="no-subscription-modal__title">
        {{messageTitle}}
      </h2>
      <p id="modalBodyText" class="no-subscription-modal__body">
        {{ messageBody}}
      </p>
      <div class="no-subscription-modal__button-container">
        <button class="no-subscription-modal__button-container__button" @click="() => subscribe()">
          Подписаться
        </button>
        <button class="no-subscription-modal__button-container__button" @click="() => checkSubscribeButton()">
          Я подписался
        </button>
      </div>
    </div>
  </ModalComponent>
</template>

<script>
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

  data() {
    return {
      messageTitle: "Подписка отсутствует!",
      messageBody: "Чтобы начать игру вам ниобходимо подписаться на наш Telegram канал. Приложение может закрыться."
    };
  },

  methods: {
    checkSubscribe() {
      //TODO: сделать проверку пользователя
      let check = false;
      return check;
    },

    subscribe() {
      const telegramUrl="https://t.me/MiniAppCardGame";
      window.open(telegramUrl, "_blank");
    },

    checkSubscribeButton() {
      let subscribe=this.checkSubscribe();

      if (subscribe) {
        this.openStartGameModal();
        this.$emit('close');
      }

      else {
        this.messageTitle="Подписка всё ещё отсутствует!"
        this.messageBody="Ваша подписка не найдена. Если вы считаете, что эта ошибка, обратитесь в службу поддержки";
      }
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

    @media(max-width: 540px) {
      font-size: 18px;
    }
  }

  &__button-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    
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
        font-size: 22px;
        box-sizing: border-box;
        width: 260px;
        margin-top: 12px;
      }
    }
  }
}
</style>