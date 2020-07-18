const initialState = {
  counter: 0,
  results: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.val,
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      ...state,
      counter: state.counter - action.val,
    };
  }
  if (action.type === "STORE_RESULT") {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter }),
    };
  }
  if (action.type === "DELETE_RESULT") {
    const newResults = state.results.filter(item => item.id !== action.elemId);
    return {
      ...state,
      results: newResults,
    };
  }
  return state;
};

export default reducer;
