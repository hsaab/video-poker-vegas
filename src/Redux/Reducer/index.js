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
    default:
      return state
  }
}

export default game;
