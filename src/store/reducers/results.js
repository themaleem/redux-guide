import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      });
    case actionTypes.DELETE_RESULT:
      const newResults = state.results.filter(
        (item) => item.id !== action.elemId
      );
      return updateObject(state, { results: newResults });
    default:
      return state;
  }
};

export default reducer;
