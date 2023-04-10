import { combineReducers } from "redux";
// Traemos el reducer
import categories from "./categories";

import blog from './blog'

export default combineReducers({
  // Aqui indicamos todo lo que queremos traer de redux

  categories,
  blog,
});
