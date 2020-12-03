import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./components/layouts/Navbar";
import Todo from "./components/todos/Todo";
import { Provider } from "react-redux";
import store from "./redux/store";
import Posts from "./components/posts/Posts";

// styles classes
const useStyles = makeStyles({
  content: {
    marginTop: "30px",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Navbar />
      <Grid container className={classes.content}>
        <Todo />
      </Grid>
      <Grid container className={classes.content}>
        <Posts />
      </Grid>
    </Provider>
  );
}

export default App;
