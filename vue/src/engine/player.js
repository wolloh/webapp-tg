export class Player{
    cards = [];
    gameScore = 0;
    handSize = 10;

    playCard(cardIndex){
        var card = this.cards[cardIndex];
        this.cards.slice(cardIndex, 1);
        return card;
    }
}