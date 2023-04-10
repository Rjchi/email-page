// Importamos la libreria para poder hacer llamados a la API
import axios from "axios";

import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "./types";

// Vamos a llamar esta funcion cuando queramos hacer un llamado a la API
export const get_categories = () => async dispatch => {
  const config = {
      headers: {
          'Accept': 'application/json'
      }
  };

  try {
    // await es el tiempo de espera por el response(ya que es una funcion asincrona no continuamos la linea
    // de codigo hasta que tengamos una repuesta)

    // Con process.env accedemos a la url de nuestra API y le pasamos la coonfiguracion
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)

    if (res.status === 200) {
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        // El payload contiene el resultado del response
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_CATEGORIES_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_CATEGORIES_FAIL
    });
  }
};
