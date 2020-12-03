import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

// Styles classes
const useStyles = makeStyles({
  form: {
    textAlign: "center",
    padding: "10px",
    width: "80%",
    marginBottom: "5px",
  },
  button: {
    marginTop: "15px",
  },
});

/*  A este Formulario le va llegar el eventop submit 
    a través de las props del componente Todo.js,
    el cual será un hijo de Form.js 
*/
const FormTodo = ({ handleSubmit }) => {
  const [value, setValue] = useState("");

  const handlerInput = (e) => {
    const { value, name } = e.target;
    setValue({ ...value, [name]: value });
  };

  const resetValue = () => {
    setValue("");
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="my-input">Tarea</InputLabel>
        <Input
          name="todo"
          aria-describedby="my-helper-text"
          onChange={handlerInput}
          value={value.name}
        />
        <FormHelperText id="my-helper-text">
          Ingrese la descripción de su tarea.
        </FormHelperText>
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          size="small"
          className={classes.button}
          endIcon={<SaveIcon />}
        >
          cargar
        </Button>
      </FormControl>
    </form>
  );
};

export default FormTodo;
