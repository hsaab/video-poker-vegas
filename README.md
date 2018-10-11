# Video Poker Vegas

To start, please do the following:

### Setup

1) `git clone https://github.com/hsaab/video-poker-vegas.git`
2) `npm install`
3) `npm start`

# How it Works

Video Poker Vegas simulates a game of [video poker](https://en.wikipedia.org/wiki/Video_poker), evaluating hands for either a straight (500 points) or a pair (100 points). The website also tracks your last five games using Redux, along with what time you played, your hand, as well as how many points you won.

### Redux Architecture

 State:
   - `stage: 'draw' ---> String (controls logic of Game component)`
   - `deck: ['AS', '4D', ...] ---> Array of 52 Strings (one for each card)`
   - `chosen: [{`
      - `card: '6D',`
      - `held: true },`
      `...] ---> Array of 5 Objects (represents our hand)`
   - `scores: [{`
      - `dateTime: 'Oct 11, 8:43:43 am',`
      - `type: 'straight',`
      - `hand: 'Straight 10 J Q K A',`
      - `points: 500`
      `},`
      `...] ---> Array of 5 Objects (represents last 5 games)``

### Step 1: Initial Render

* `./src/index.js` renders the `./src/App.js` component, passing our Redux store as a prop
* `./src/App.js` renders `./src/Containers/Game.js`, which serves as the main lifecycle component with logic
* Upon `./src/Containers/Game.js` rendering, `componentDidMount()` fires `this.props.gameStage('draw')`
* `this.props.gameStage('draw')` is a Redux action which
