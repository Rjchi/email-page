// Esto es un reducer de categorias

import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from '../actions/categories/types'

const initialState = {
  categories: null,
};

export default function categories(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
      };
    // En caso de que fallemos reasignamos el estado inicial como nulo
    case GET_CATEGORIES_FAIL:
      return {
        // Este es el estado que tenemos en el momento
        ...state,
        categories: null,
      };

    default:
      return state;
  }
}
