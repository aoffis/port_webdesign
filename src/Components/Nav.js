import React from "react";
import "../Styles/Nav.css";
import "fontsource-roboto";
import {
  Toolbar,
  Typography,
  AppBar,
  makeStyles,
  Button,
  Link,
  Grid,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bar: {
    padding: "1em",
    backgroundColor: "#212121",
  },
  title: {
    flexGrow: 1,
    color: "white",
    marginBottom: "1em",
  },
  text: {
    color: "white",
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
          <Grid item lg={6} md={6} sm={6} xs={3}>
            <Grid item lg={12}>
              <Typography align="center">
                <Button href="#" className={classes.title}>
                  <Typography variant="h4">PORTFOLIO</Typography>
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
        </Grid>

        <Grid container>
          <Grid item lg md sm xs></Grid>
          <Grid item lg={2}>
            <Typography align="center">
              <Button href="#" className={classes.text}>
                <Typography variant="h6">MY WORKS</Typography>
              </Button>
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography align="center">
              <Button href="#" className={classes.text}>
                <Typography variant="h6">ABOUT ME</Typography>
              </Button>
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography align="center">
              <Button href="" className={classes.text}>
                <Typography variant="h6">CONTACT</Typography>
              </Button>
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography align="center">
              <Button href="" className={classes.text}>
                <Typography variant="h6">ABOUT ME</Typography>
              </Button>
            </Typography>
          </Grid>
          <Grid item lg md sm xs></Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Nav;
