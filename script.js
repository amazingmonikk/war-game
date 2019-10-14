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


class Deck {
    constructor() {
        this.cards = []
    }

    createDeck() {
        const card = (suit, rank) => {
            this.name = rank + " of " + suit
            this.suit = suit
            this.rank = rank
            console.log({ name: this.name, suit: this.suit })

        }

        const suits = ["hearts", "spades", "clubs", "diamonds"];
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "A"];
        // const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];

        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                this.cards.push(card(suits[s], ranks[r]))
            }
        }
    }
}
const deck = new Deck()
deck.createDeck()