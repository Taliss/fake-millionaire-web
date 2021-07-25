import { CLEAR_DATE_TIME_SLICE } from './common';
import { getBuySellBoints } from './millionaire';

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
    case PROFIT_INFO_RECALCULATED: {
      return { ...state, profitInfo: { ...payload } };
    }
    case CLEAR_DATE_TIME_SLICE: {
      return { ...state, profitInfo: initialState.profitInfo };
    }
    case AMOUNT_RESETED: {
      return initialState;
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
export const PROFIT_INFO_RECALCULATED = 'amount/profitInfoRecalculated';
const AMOUNT_RESETED = 'amount/reseted';

// action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export const recalculateProfitInfo = () => (dispatch, getState) => {
  const state = getState();
  const amount = getCurrentAmount(state);
  const { buyPoint, sellPoint } = getBuySellBoints(state);

  if (buyPoint.price && sellPoint.price && amount) {
    const stocksAmount = Math.floor(amount / buyPoint.price);
    const amountSpend = stocksAmount * buyPoint.price;

    dispatch({
      type: PROFIT_INFO_RECALCULATED,
      payload: {
        bought: stocksAmount,
        sold: stocksAmount,
        profit: stocksAmount
          ? (stocksAmount * sellPoint.price - amountSpend).toFixed(2)
          : 0,
      },
    });
  }
};

export const amountReseted = () => ({
  type: AMOUNT_RESETED,
});
