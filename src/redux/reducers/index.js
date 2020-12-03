import { combineReducers } from "redux";
import todo from "./todoReducer";
import posts from "./postsReducer";

export default combineReducers({
  todo,
  posts,
});
