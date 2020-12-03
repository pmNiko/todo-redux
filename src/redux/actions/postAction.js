//FETCH_POST_REQUEST
//FETCH_POST_SUCCESS
//FETCH_POST_ERROR

const URL = "https://jsonplaceholder.typicode.com/posts";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

// fetchPosts se ejecutará con useEffect para hacer la petición a la API
export const fetchPosts = (dispatch) => {
  // Primero ejecuta FETCH_POST_REQUEST y pasa por el reducer
  // para setear el state
  dispatch({ type: FETCH_POST_REQUEST });

  // luego resuleve la promesa y tiene dos posibilidades
  fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
      // si la resuelve correctamente va al reducer con la action FETCH_POST_SUCCESS
      dispatch({ type: FETCH_POST_SUCCESS, payload: { posts } });
    })
    // por el contrario si ocurre un error llama al reducer con la action FETCH_POST_ERROR
    .catch((e) => dispatch({ type: FETCH_POST_ERROR, payload: { e } }));
};
