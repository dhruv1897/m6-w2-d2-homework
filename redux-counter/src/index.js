import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  // <h1>Hello</h1>
  <Provider store={store}> 
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));