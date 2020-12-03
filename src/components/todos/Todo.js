import React from "react";
import { Grid, ListItemIcon, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FormTodo from "./FormTodo";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../../redux/actions/todoAction";
// npm install short-id
import ids from "short-id";

// styles classes
const useStyles = makeStyles({
  content: {
    padding: "10px",
    background: grey[400],
    marginTop: "20px",
  },
  list: {
    width: "100%",
    background: grey[50],
  },
});

// ---- Componente Todo ----- //
const Todo = ({ todo, addTodo, deleteTodo, updateTodo }) => {
  // Manejador del evento del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Armamos un objeto para crear un nuevo elemento
    const obj = {
      id: ids.generate(),
      text: e.target[0].value,
      checked: false,
      date: new Date(),
    };
    addTodo(obj);
    resetValue();
  };

  const resetValue = () => {};

  const classes = useStyles();
  return (
    <>
      {/* Importación del componente de formulario */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormTodo handleSubmit={handleSubmit} resetValue={resetValue} />
      </Grid>

      {/* Componente de Tareas */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box border={0} className={classes.content}>
          <List dense className={classes.list}>
            {todo.todos.length === 0 && <p>"No hay tareas cargadas"</p>}
            {/* accedo a todos del state */}
            {todo.todos.map((t) => {
              return (
                <ListItem key={t.id} button>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      onChange={() => {
                        updateTodo(t);
                      }}
                      checked={t.checked}
                      inputProps={{ "aria-labelledby": t.id }}
                    />
                  </ListItemIcon>
                  <ListItemText id={t.id} primary={t.text} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      color="secondary"
                      onClick={() => deleteTodo(t)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
