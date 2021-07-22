const initialState = {
  buyPoint: { startDate: '', price: 0 },
  sellPoint: { startDate: '', price: 0 },
  error: null,
  status: 'idle',
};

// reducer
export function millionaireReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BUY_SELL_POINTS_LOADING: {
      return { ...state, status: 'loading' };
    }
    case GET_BUY_SELL_POINTS_SUCCESS: {
      return {
        ...initialState,
        buyPoint: payload.buyPoint,
        sellPoint: payload.sellPoint,
      };
    }
    case GET_BUY_SELL_POINTS_ERROR: {
      return { ...initialState, error: payload.message };
    }
    default: {
      return state;
    }
  }
}

//selectors
export const getBuySellPointsStatus = (state) => state.status;
export const getBuySellPointsErrorStatus = (state) => state.error;
export const getBuySellBoints = (state) => ({
  buyPoint: state.buyPoint,
  sellPoint: state.sellPoint,
});

//action types
export const GET_BUY_SELL_POINTS_LOADING = 'millionaire:get/buySellPoints';
export const GET_BUY_SELL_POINTS_SUCCESS =
  'millionaire:get:success/buySellPoints';
export const GET_BUY_SELL_POINTS_ERROR = 'millionaire:get:error/buySellPoints';
