import { CLEAR_DATE_TIME_SLICE } from './common';

const initialState = {
  current: 0,
  profitInfo: {
    bought: 0,
    sold: 0,
    profit: 0,
  },
};

// reducer
export function amountReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AMOUNT_CHANGED: {
      return { ...state, current: payload };
    }
    case PROFIT_INFO_CHANGED: {
      return { ...state, profitInfo: { ...payload } };
    }
    case CLEAR_DATE_TIME_SLICE: {
      return { ...state, profitInfo: { ...initialState.profitInfo } };
    }
    default: {
      return state;
    }
  }
}

//selectors
export const getCurrentAmount = (state) => state.amount.current;
export const getProfitInfo = (state) => state.amount.profitInfo;

//action types
export const AMOUNT_CHANGED = 'amount/amountChanged';
export const PROFIT_INFO_CHANGED = 'amount/profitInfoChanged';

// action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

const calculateProfit = () => {};
