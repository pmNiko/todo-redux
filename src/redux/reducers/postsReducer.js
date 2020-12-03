import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "../actions/postAction";

// inicialización de state
const initialState = {
  posts: [],
  isFetching: false,
  errors: false,
  errorMessage: "",
};

// ---- Reducers de Posts --- //
function posts(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state, //conserva los elemnetos
        isFetching: true, // cambia el estado de isFetching
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state, //conserva los elemnetos
        isFetching: false, // cambia el estado de isFetching
        posts: actions.payload.posts, //guarda los posts en el array
      };
    case FETCH_POST_ERROR:
      return {
        ...state, //conserva los elemnetos
        errors: true, // cambia el estado de errors
        errorMessage: actions.payload.e, //seteo la propiedad message con el error
      };
    default:
      return state;
  }
}

export default posts;
