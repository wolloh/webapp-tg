import { Player } from './player';
import { DECK, WinnerStates, TurnStates, MAX_CARDS_IN_HAND, POINTS_TO_WIN } from '@/core/constants';
import { sleep } from '@/core/utils';

export class GameEngine {
    instance;
    player = new Player();
    bot = new Player();
    board = [];
    turn = TurnStates.PLAYER;
    winner = WinnerStates.NONE;

    constructor(){ 
       this.instance = this;
       let shuffledCards = this.shuffleCards(DECK);
       this.player.cards = shuffledCards.slice(0, MAX_CARDS_IN_HAND);
       let botCards = shuffledCards.slice(MAX_CARDS_IN_HAND, shuffledCards.length);
       this.bot.cards = botCards.toSorted((a,b) => a.rank < b.rank ? 1 : -1);
    }

    getInstance(){
        return this.instance || new GameEngine();
    }

    async makePlayerMove(cardId){
        if(this.turn == TurnStates.BOT){
            return;
        }

        this.board.push(this.player.cards.find(card => card.id == cardId));

        let playerCard = this.player.playCard(cardId);

        this.turn = TurnStates.BOT;

        await sleep(1000);

        let botCard = await this.makeBotMove();

        if(playerCard.rank > botCard.rank){
            this.player.gameScore++;
        }
        else if(playerCard.rank < botCard.rank){
            this.bot.gameScore++;
        }

        await sleep(1000);

        this.CheckIfSomeOneWin();
        this.turn = TurnStates.PLAYER;
        this.clearBoard();
    }

    async makeBotMove(){
        this.turn = TurnStates.BOT
        let botCard = this.bot.cards.shift();
        this.board.push(botCard);

        return botCard;
    }

    CheckIfSomeOneWin(){
        if(this.player.cards.length == 0) {
            this.winner = this.findWinner();
            return;
        }

        if(this.player.gameScore == POINTS_TO_WIN) {
            this.winner = WinnerStates.PLAYER_WINS;
        }

        if(this.bot.gameScore == POINTS_TO_WIN){
            this.winner = WinnerStates.BOT_WINS;
        }
    }

    findWinner() {
        if(this.player.gameScore > this.bot.gameScore) {
            return WinnerStates.PLAYER_WINS;
        }
        
        else if (this.player.gameScore == this.bot.gameScore) {
            return WinnerStates.DRAW
        }

        else if (this.player.gameScore < this.bot.gameScore) {
            return WinnerStates.BOT_WINS;
        }
    }

    startNewGame(){
        this.player = new Player();
        this.bot = new Player();
        let shuffledCards = this.shuffleCards(DECK);

        this.player.cards = shuffledCards.slice(0, MAX_CARDS_IN_HAND);
        let botCards = shuffledCards.slice(MAX_CARDS_IN_HAND, shuffledCards.length);
        this.bot.cards = botCards.toReversed();
        this.winner = WinnerStates.NONE;
        this.turn = TurnStates.PLAYER;
    }

    
    clearBoard(){
        this.board = [];
    }

    shuffleCards(cards){
        let j, temp;
        for(let i = cards.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = cards[j];
            cards[j] = cards[i];
            cards[i] = temp;
        }
        return cards;
    }
}

