const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const lastState = store.getState();
  console.log("Subscribe Trigger!", lastState);
};

store.subscribe(counterSubscriber);

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
