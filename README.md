# Video Poker Vegas

To start, please do the following:

### Setup

1) `git clone https://github.com/hsaab/video-poker-vegas.git`
2) `npm install`
3) `npm start`

# How it Works

Video Poker Vegas simulates a game of [video poker](https://en.wikipedia.org/wiki/Video_poker), evaluating hands for either a straight (500 points) or a pair (100 points). The website also tracks your last five games using Redux, along with what time you played, your hand, as well as how many points you won.

### API

`./src/API`

- `createShuffledDeck()` returns a shuffled, 52 card deck as an array
- `dealFiveCards(deck)` returns 5 'chosen' cards from top of deck as an array of objects
- `calculateResult(deck, chosen)` switches discarded with cards at top of deck and returns an object which includes the new deck, new chosen and score object

### Redux

`./src/Redux`

 **State:**
   - `stage: 'draw' ---> String (either 'draw', 'switch' or 'result' --> controls logic of Game component)`
   - `deck: ['AS', '4D', ...] ---> Array of 52 Strings (one for each card)`
   - `chosen: [{`
      - `card: '6D',`
      - `held: true },`
      <br/>`...] ---> Array of 5 Objects (represents our hand)`
   - `scores: [{`
      - `dateTime: 'Oct 11, 8:43:43 am',`
      - `type: 'straight',`
      - `hand: 'Straight 10 J Q K A',`
      - `points: 500},`
      <br/>`...] ---> Array of 5 Objects (represents last 5 games)`

  **Actions:**
    * `gameStage(stage)` changes the stage property
    * `addScore(score)` adds score to scores property
    * `replaceCards(deck, chosen)` replaces deck and chosen properties
    * `toggleCard(card)` searches for card arg within chosen array and toggles held property to true / false

### Step 1: Initial Render

`src/index.js`
`src/App.js`
`src/Containers/Game.js`
`src/Components/Draw/Draw.js`

* `index.js` renders the `App.js`, passing our Redux store as a prop
* `App.js` renders `Game.js`, which serves as the main, logical lifecycle component
  - `Game.js` passes down important props, such as API functions and Redux state to children components
* Upon `Game.js` rendering, `componentDidMount()` fires `this.props.gameStage('draw')` (Redux)
* `Game.js` renders either `Draw.js`, `Switch.js` or `Result.js` depending on what stage we are in
* Because we start in the `draw` stage, we pass the `Draw` component to Layout which renders `Draw.js`

### Step 2: Draw

`src/Components/Draw/Draw.js`
`src/Components/Table.js`

* The `Draw.js` is rendered with `Table.js` as a child component
  - `Table.js` uses the scores property in our Redux store to present the most recent 5 scores
* To begin the game, we click on the `Deal` button, which fires component prototype function called `dealCards()`, which -
  - calls `createShuffledDeck()` and `dealFiveCards()` (API) to create a deck and chose 5 cards
  - dispatches `replaceCards()` (Redux) to add deck and chosen
  - dispatches `gameStage()` (Redux) to change the stage to `switch`

### Step 3: Switch

`src/Components/Switch/Switch.js`
`src/Components/Card.js`

* Because we changed our stage in Redux to `switch`, our `Game.js` re-renders now passing the `Switch` component which renders `Switch.js`
* `Switch.js` renders a helper component for each card called `Card.js`, which returns a clickable img element
  - Upon click, `toggleCard()` (Redux) is dispatched
  - `Card.js` re-renders with new text above the card to indicate it will be discarded
* Once we have decided the cards to discard and keep, we can press `Go` button, firing a component prototype function called `getResult()` which -
  - calls `calculateResult()` (API) to return new deck, chosen and score
  - dispatches `replaceCards()` (Redux) to update our deck and chosen
  - dispatches `addScore()` (Redux) to add score object to Redux
  - dispatches `gameStage()` (Redux) to change the stage to `result`

### Step 4: Result

`src/Components/Result/Result.js`
`src/Components/Card.js`
`src/Components/Banner.js`

* Once our stage in Redux changes to `result`, the `Game.js` re-renders now passing the `Result` component which renders `Result.js`
* The updated chosen cards are re-rendered using `Card.js`
* `Banner.js` is also rendered which serves to present the User's hand and score
* If the User would like to play again, he / she can press `New Game` button, which dispatches `gameStage()` (Redux) to change the stage back to `draw`
* Upon changing stage to `draw`, we see an updated score table with the result of our most recent hand

## Testing

`src/Tests`

[Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme) are used for unit and DOM manipulation testing. See folder above for unique test files on components, Redux and API functionality.

* `npm test` for list of all tests
* `npm run coverage` for test coverage

## Key Technologies Used

* React
* Redux
* React-Table
* Underscore
* Moment
* Jest
* Enzyme
* BassCSS

## v2 Features

* Expand point scheme to allow for different types of hands (i.e. three of a kind, etc.)
* Improve UI
* Use sockets to play against friends in real-time
* Play a computer
* Expand test coverage, particularly for Game component
