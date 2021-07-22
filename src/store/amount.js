const initialState = {
  current: {
    displayValue: 0,
    wholeNumberValue: 0,
  },
  profitInfo: {
    bought: 0,
    profit: 0,
    amountSpent: 0,
    amountEarned: 0,
  },
};

// reducer
export function amountReducer(state = initialState, action) {
  switch (action.type) {
    case AMOUNT_CHANGED: {
      return { ...state, current: { ...action.payload } };
    }
    case PROFIT_INFO_CHANGED: {
      return { ...state, profitInfo: { ...action.paylod } };
    }
    default: {
      return state;
    }
  }
}

//selectors
export const getCurrentAmount = (state) => state.current;
export const getProfitInfo = (state) => state.profitInfo;

//action types
export const AMOUNT_CHANGED = 'amount/amountChanged';
export const PROFIT_INFO_CHANGED = 'amount/profitInfoChanged';

// action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});
