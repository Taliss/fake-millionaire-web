import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  startDateTime: '',
  endDateTime: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
