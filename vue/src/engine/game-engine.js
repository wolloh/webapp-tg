
import { Player } from './player';
import { DECK, WinnerStates, TurnStates, MAX_CARDS_IN_HAND, POINTS_TO_WIN } from '@/core/constants';
export class GameEngine {
    instance;
    player = new Player();
    bot = new Player();
    board = [];
    deck = DECK
    Turn = TurnStates.PLAYER;
    MAX_CARDS_IN_HAND = 10;
    winner = WinnerStates.NONE;

    constructor(){ 
       this.instance = this;
       var shuffledCards = this.shuffleCards(DECK);
        console.log(shuffledCards);
        console.log('123')
       this.player.cards = shuffledCards.slice(0, MAX_CARDS_IN_HAND);
       var botCards = shuffledCards.slice(MAX_CARDS_IN_HAND, shuffledCards.length);
       this.bot.cards = botCards.toReversed();
    }

    getInstance(){
        return this.instance || new GameEngine();
    }

    makePlayerMove(cardIndex){
        if(this.Turn == TurnStates.BOT){
            return; // Bot's turn, skip it.
        }

        this.board.push(this.player.cards[cardIndex]);
        var playerCardRank = this.player.playCard(cardIndex);

        var botCardRank = this.makeBotMove();

        if(playerCardRank > botCardRank){
            this.player.gameScore++;
        }
        else if(playerCardRank < botCardRank){
            this.bot.gameScore++;
        }

        console.log(this.board);
        this.CheckIfSomeOneWin();
        this.Turn = TurnStates.PLAYER;
        this.clearBoard();
    }

    makeBotMove(){
        this.Turn = TurnStates.BOT
        var botCard = this.bot.cards.shift();
        this.board.push(this.bot.cards[botCard]);
        return botCard.rank;
    }

    // CheckIfSomeOneWin(){
    //     if(this.deck.length == 0){
    //         this.winner = this.player.score == this.bot.gameScore 
    //         ? WinnerStates.DRAW
    //         : this.getWinner()
    //         return;
    //     }

    //     if(this.player.score == POINTS_TO_WIN) {
    //         this.winner = WinnerStates.PLAYER_WINS;
    //     }
    //     if(this.bot.score == POINTS_TO_WIN){
    //         this.winner = WinnerStates.BOT_WIzNS;
    //     }
    // }

    // getWinner(){
    //     if(this.player.score > this.bot.score){
    //         return WinnerStates.PLAYER_WINS;
    //     }
        
    //     return WinnerStates.BOT_WINS;
    // }

    CheckIfSomeOneWin(){
        if(this.deck.length == 0) {
            this.winner = this.getWinner();
            return this.winner;
        }

        if(this.player.score == POINTS_TO_WIN) {
            this.winner = WinnerStates.PLAYER_WINS;
            return this.winner;
        }

        if(this.bot.score == POINTS_TO_WIN){
            this.winner = WinnerStates.BOT_WINS;
            return this.winner;
        }
    }

    getWinner() {
        if(this.player.score > this.bot.score) {
            return WinnerStates.PLAYER_WINS;
        }
        
        else if (this.player.score == this.bot.score) {
            return WinnerStates.DRAW
        }

        else if (this.player.score < this.bot.score) {
            return WinnerStates.BOT_WINS;
        }
    }

    startNewGame(){
        this.player = new Player();
        this.bot = new Player();
        var shuffledCards = this.shuffleCards();

        this.player.cards = shuffledCards.slice(0, MAX_CARDS_IN_HAND);
        var botCards = shuffledCards.slice(MAX_CARDS_IN_HAND, shuffledCards.length);
        this.bot.cards = botCards.toReversed();
    }

    
    clearBoard(){
        this.board = [];
    }

    shuffleCards(cards){
        var j, temp;
        for(var i = cards.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = cards[j];
            cards[j] = cards[i];
            cards[i] = temp;
        }
        return cards;
    }
}

