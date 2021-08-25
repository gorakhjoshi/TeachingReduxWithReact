import { createStore } from 'redux';

const counterReducer = (state = { counter: 10 }, action) => {
  if (action.type === 'increment') {
    return { conter: state.counter + 1 };
  }
  if (action.type === 'decrement') {
    return { conter: state.counter - 1 };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
