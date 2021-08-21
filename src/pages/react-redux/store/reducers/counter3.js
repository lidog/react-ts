import * as actionTypes from "../actionTypes";

const initialState = { number: 0 };

function counter3(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD3:
      return { number: state.number + 1 };
    case actionTypes.MINUS3:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counter3;
