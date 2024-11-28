import deck from './deck'
import modals from './modals'
import game_engine from './game_engine'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  modules: {
    modals,
    game_engine,
    deck,
  }
}
