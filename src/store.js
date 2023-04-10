import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Con esto le indicamos que traiga el archivo index.js de reducers
import rootReducer from './redux/reducers'
// Con esto activamos la extension de redux
import { composeWithDevTools } from 'redux-devtools-extension'

// El estado inicial lo vamos a llenar con variables
const initialState = {

};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // (Dependiendo de si no queremos que nuestro sitio refleje si esta hecho con react - redux descomentamos
    // la siguiente linea y comentamos la ultima )
    // applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;