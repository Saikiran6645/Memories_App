import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/posts.js";
import Form from "./components/Form/form.js";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";
const App = () => {
  const classes = useStyles();
  const data = useSelector((state) => state?.post?.posts);
  console.log(data);
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              {" "}
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
