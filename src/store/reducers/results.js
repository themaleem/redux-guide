import * as actionTypes from "../actions/action";

const initialState = {
  results: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const newResults = state.results.filter(
        (item) => item.id !== action.elemId
      );
      return {
        ...state,
        results: newResults,
      };
  }

  return state;
};

export default reducer;
