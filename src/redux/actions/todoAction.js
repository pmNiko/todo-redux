// ABM de tareas
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MODIFY_TODO = "MODIFY_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const modifyTodo = (payload) => {
  return {
    type: MODIFY_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
