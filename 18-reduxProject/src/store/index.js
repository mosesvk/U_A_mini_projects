import { createStore } from "redux";

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT")
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }
  if (action.tdype === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREASE" });
// store.dispatch({ type: "DECREMENT" });
