const redux = require('redux')

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1
  }
}

redux.createStore(counterReducer)

const counterSubscriber = () => {
  const latestState = store.getState()
}