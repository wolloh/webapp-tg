

export class Player{
    cards = [];
    score = 0;
    handSize = 10;

    playCard(cardIndex){
        var card = cards[cardIndex];
        this.cards.slice(cardIndex, 1);
        return card;
    }
}