import axios from 'axios';
import * as types from '../actionTypes';

export const setCitizens = (citizens) => ({
  type: types.SET_CITIZENS,
  citizens,
});

export const setCities = (cities) => ({
  type: types.SET_CITIES,
  cities,
});

export const loadCitizens = () => async (dispatch) => {
  try {
    const json = await axios.get('/api/citizens');
    dispatch(setCitizens(json.data.citizens));
    dispatch(setCities(json.data.cities));
  } catch {
    throw new Error('Ошибка при загрузке данных');
  }
};
