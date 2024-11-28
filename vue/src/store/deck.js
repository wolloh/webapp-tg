import { DeckBuilder } from '@/engine/deck-builder'
import { cardsNames } from '@/engine/constants'

export default {
  namespaced: true,
  state: {
    cards: new DeckBuilder(22, 1, 15, cardsNames).generateDeck(),
  },
  getters: {
    getDeck: (state) => state.cards,
    getCardById: (state) => (id) => state.cards.find(item => item.id === id),
  },
  mutations: {
    POP_CARD: (state, callback) => {
      let card = state.cards.pop()
      callback(card)
    },
    POP_CARDS: (state, {n, callback}) => {
      if (state.cards.length < n) {
        return
      }

      let card_list = []
      for (let i = 0; i < n; i++) {
        let card = state.cards.pop()
        card_list.push(card)
      }
      callback(card_list)

    }
  },
  actions: {
    popCard: (context) => {
      return new Promise((resolve) => context.commit('POP_CARD', resolve))
    },
    popCards: (context, n) => {
      return new Promise((resolve) => context.commit('POP_CARDS', {n: n, callback: resolve}))
    }
  }
}