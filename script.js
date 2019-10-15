// need:
// - deck of cards
// - two players

// 1. 
//     * create a deck
//     * shuffle the deck
//     * deal 26 cards to each players(keep your cards face down)

// 2.
//     * flip your top cards over at the same time
//     * the card with the highrt value wins
//     * winner takes(adds) both cards at the bottom of their pile(face up)
//     * cards with A'a are the heigest and 2's are the lowest

// 3.
//     * continue flipping, if you reached the cards that are face up
//     shaffle your cards and start at the top

// 4.
//     * If you flip two cards at equal value war begins
//     * both players take a card from the top of their pile
//     and set it face down on the top of their first card
//     * than take a third card and flip it face up
//     * the player whose card had the heigher value wins all six cards

// 5.
//     * if the two new cards are also a tie war is declared again
//     * and the process repeats again until the player has a card of heigher value
//     * the first player to capture 52 cards wins

class Cards {
    constructor(suit, rank, scores) {
        this.suit = suit
        this.rank = rank
        this.scores = scores
        //console.log({ name: this.name, suit: this.suit })
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.length = 52
        this.createDeck()
    }

    createDeck() {
        const suits = ["hearts", "spades", "clubs", "diamonds"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "A"];
        const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                const newCard = new Cards(suits[s], ranks[r], scores[r])
                this.cards.push(newCard)
            }
        }
    }
    shuffleCards() {
        let shuffleDeck = []
        for (let i = 0; i < 52; i++) {
            var deckCards = this.cards.length
            let randomCard = Math.floor(Math.random * deckCards)
            let shuffleCards = this.cards.splice(randomCard, 1)[0]
            shuffleDeck.push(shuffleCards)
        }
        this.cards = shuffleDeck
    }
}

class Players {
    constructor() {
        this.player1 = []
        this.player2 = []
        this.shuffleDeck = []
    }
    divideCarde() {

    }
}



const deck = new Deck()
deck.createDeck()
deck.shuffleCards()
console.log(deck.cards)
