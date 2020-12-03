import {
  ADD_TODO,
  DELETE_TODO,
  MODIFY_TODO,
  UPDATE_TODO,
} from "../actions/todoAction";

const initialState = {
  // aca podrian ir otras props
  todos: [
    {
      id: "mi_id",
      text: "Subir las clases a tiempo",
      checked: false,
      date: new Date(),
    },
  ],
};

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, //con este spread estamos conservando el estado de las props del nivel superior
        todos: [action.payload, ...state.todos], //poner el spread indica la conservación de los elementos del nivel al que estamos apuntando
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (action.payload.id === todo.id) {
              // return { ...todo, checked: !todo.checked };
              todo.checked = !todo.checked;
            }
            return todo;
          }),
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default todo;
