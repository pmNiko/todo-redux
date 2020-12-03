import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { fetchPosts } from "../../redux/actions/postAction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// styles classes
const useStyles = makeStyles({
  content: {
    padding: "30px",
    background: grey[400],
  },
  list: {
    width: "100%",
    background: grey[50],
  },
  table: {
    minWidth: 650,
  },
});

const Posts = ({ posts, fetchPost }) => {
  // usamos useEffect para hacer la petición
  useEffect(() => {
    fetchPost();
  }, []);

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={6} lg={6}>
      <Box border={0} className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Numero</TableCell>
                <TableCell align="right">Titulo</TableCell>
                <TableCell align="right">Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell component="th" scope="row">
                    {post.id}
                  </TableCell>
                  <TableCell align="right">{post.title}</TableCell>
                  <TableCell align="right">{post.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => fetchPosts(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
