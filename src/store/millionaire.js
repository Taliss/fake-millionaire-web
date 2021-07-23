import { getPoints } from '../api';
import { FALLBACK_ERROR_MESSAGE } from '../constants';
import { CLEAR_DATE_TIME_SLICE } from './common';
import { recalculateProfitInfo } from './amount';

const initialState = {
  buyPoint: { dateTime: '', price: 0 },
  sellPoint: { dateTime: '', price: 0 },
  error: null,
  status: 'idle',
};

// reducer
export function millionaireReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BUY_SELL_POINTS: {
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
    case CLEAR_DATE_TIME_SLICE: {
      return {
        ...state,
        buyPoint: { ...initialState.buyPoint },
        sellPoint: { ...initialState.sellPoint },
      };
    }
    default: {
      return state;
    }
  }
}

//selectors
export const getBuySellPointsStatus = (state) => state.millionaire.status;
export const getBuySellPointsErrorStatus = (state) => state.millionaire.error;
export const getBuySellBoints = (state) => ({
  buyPoint: state.millionaire.buyPoint,
  sellPoint: state.millionaire.sellPoint,
});

//action types
export const GET_BUY_SELL_POINTS = 'millionaire:get/buySellPoints';
export const GET_BUY_SELL_POINTS_SUCCESS =
  'millionaire:get:success/buySellPoints';
export const GET_BUY_SELL_POINTS_ERROR = 'millionaire:get:error/buySellPoints';

export const getBuySellPoints = (payload) => (dispatch) => {
  dispatch({
    type: GET_BUY_SELL_POINTS,
  });
  getPoints(payload)
    .then((response) => {
      dispatch({
        type: GET_BUY_SELL_POINTS_SUCCESS,
        payload: response.buySellPoints,
      });

      dispatch(recalculateProfitInfo());
    })
    .catch((err) => {
      dispatch({
        type: GET_BUY_SELL_POINTS_ERROR,
        payload: {
          message: (err && err.message) || FALLBACK_ERROR_MESSAGE,
        },
      });
    });
};
