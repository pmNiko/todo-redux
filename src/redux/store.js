import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers"; //Hace rerefencia al file index.js
import thunk from "redux-thunk";

// Para gestionar los middlewares usamos la función
// con applymiddleware y le pasamos el elemento que soporta thunk
const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;

/*
  Este store lo tiene que consumir el App.js en los Providers
  La estructura: todos los reducers, el store creado y los componentes 
  suscriptos, para que a través de dispatch las actions se propaguen 
  desde el componente hacia el store principal.
*/

/*  Para poder gestionar promise necesito
    applyMiddleware y redux Thank  
*/
