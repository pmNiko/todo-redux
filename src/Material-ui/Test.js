import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Icon, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custom: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const Test = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.custom}>Custom</Button>

      {/* Button normal */}
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
        Borrar
      </Button>

      {/* Con svg */}
      <DeleteIcon color="primary" />
      {/* Button con icono svg */}
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
        Borrar SVG
      </Button>

      {/* CDN */}
      <Icon> start</Icon>

      <Button
        variant="contained"
        color="secondary"
        endIcon={<Icon> start</Icon>}
      >
        Borrar CDN
      </Button>

      <IconButton aria-label="delete">
        <DeleteIcon color="secondary" />
      </IconButton>

      <Typography variant="h1" color="initial">
        Este es un H1
      </Typography>
      <Typography variant="subtitle1" color="primary">
        Este es un subtitle
      </Typography>
      <Typography variant="body1" color="secondary" align="center">
        Body
      </Typography>
    </div>
  );
};

export default Test;
