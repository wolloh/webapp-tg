import { GameEngine } from "@/engine/game-engine";

export default {
    namespaced: true,
    state: {
        engine: new GameEngine()
    },
    getters: {
        getEngine: (state) => state.engine,
        getPlayerCards: (state) => state.engine.player.cards,
        getBotCards: (state) => state.engine.bot.cards,
        getCardsOnBoard: (state) => state.engine.board,
    }
}