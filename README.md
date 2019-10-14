# Game of War

The project is about the card game called "War". 

## In this game you need:

- deck of cards
- two players

## Description of the code

1. First I created a class Deck which is like my template for a deck.
2. Next I created a contructor which is called when I initiated a class. You can pass down information to a constructor that is specific instance of the deck. In this example, I didn't pass anything specific because I know I will always have 52 cards.
4. `this.DeckOfCards` is an empty array where I push my cards.
5. `createDeck()` function creates and pushes all 52 cards objects into my empty array.
Inside the function I have:
* card object `const card` with three parameters: suit, rank, score.
* array of suit, rank, score.
* nested for loop.
6. At the bottom I am calling the `deck.createDeck()`method.


