import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { amountReducer } from './amount';
import { millionaireReducer } from './millionaire';

export const store = createStore(
  combineReducers({
    millionaire: millionaireReducer,
    amount: amountReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
