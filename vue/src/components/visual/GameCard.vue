<template>
  <div 
    class="card" 
    :class="{ 'card--face-down': faceDown, 'card--active': !faceDown && !onBoard }"
  >
    <div 
      v-if="!faceDown" 
      class="card__content" 
      :class="{ 'card__content--small': !onBoard }"
    >
      <span class="card__content__rank--top">
        {{ card.rank }}
      </span>

      <span class="card__content__name">
        {{ card.name }}
      </span>

      <span class="card__content__rank--bottom">
        {{ card.rank }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    card: {
      type: Object,
      default: null,
      required: true
    },
    faceDown: {
      type: Boolean,
      default: false,
      required: false
    },
    onBoard: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  height: 100%;
  min-height: 158px;
  max-height: 420px;
  aspect-ratio: 2 / 3; // соотношение сторон 2:3
  background-color: #F3E9D2;
  border: solid 2px #999488;
  border-radius: 12px;
  margin-right: -13px;

  &__content {
    height: inherit;
    padding: 8%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Neucha", cursive;
    font-size: 36px;
    color: #17211E;

    &__name {
      text-align: center;
    }

    &__rank--bottom {
      text-align: right;
    }

    &--small {
      font-size: 24px;
    }
  }

  &--active:hover {
    z-index: 3;
    min-height: 170px;
    max-height: 435px;
    cursor: pointer;
  }

  &--face-down {
    min-height: 85px;
    background-color: #DA667B;
    border: solid 2px #804651;
    border-radius: 8px;
    margin-right: 5px;
  }
}
</style>
