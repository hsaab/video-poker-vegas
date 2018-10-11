const game = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'STAGE':
      if(action.type === 'draw') newState = {};
      newState.stage = action.stage;
      return newState;
    case 'REPLACE':
      newState.chosen = action.chosen;
      newState.deck = action.deck;
      return newState;
    case 'TOGGLE':
      newState.chosen = newState.chosen.map((each) => {
        if(each.card === action.card) {
          each.held = !each.held;
        }
        return each;
      });
      return newState;
    case 'SCORE':
      if(newState.scores && newState.scores.length === 5) {
        newState.scores = newState.scores.slice(0, 4);
        newState.scores = [action.score, ...newState.scores];
      } else if(newState.scores && newState.scores.length < 5) {
        newState.scores = [action.score, ...newState.scores];
      } else {
        newState.scores = [action.score];
      }
      return newState;
    default:
      return state;
  }
}

export default game;
