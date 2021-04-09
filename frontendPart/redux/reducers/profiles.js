import * as types from '../actionTypes';

const initialState = {
  citizens: [],
  cities: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CITIZENS:
      return {
        ...state,
        citizens: action.citizens,
      };
    case types.SET_CITIES:
      return {
        ...state,
        cities: action.cities,
      };
    default:
      return state;
  }
}
