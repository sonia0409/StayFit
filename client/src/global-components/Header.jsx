import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Grid container spacing={8}> */}
          {/* <Grid item xs={4}> */}
          <Typography variant="h6" className={classes.title}>
            My-Workout
          </Typography>
          {/* </Grid> */}
          {/* <Grid item xs={6}> */}
          <Typography
            variant="h6"
            // noWrap
            // component="div"
            // sx={{ mr: 6, display: { xs: "none", md: "flex" } }}
          >
            {/* LOGO */}
          </Typography>
          {/* </Grid> */}
          {/* <Grid item xs={1}> */}
          <Avatar
            // alt="Tired man"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSNIFSen-ODMRSzmOFJkfqBxejIsxvl2_6g&usqp=CAU"

            alt="Side curve shaddow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJer6FiaY05AG_7wxANXkCAqtDPjqJl5tLqA&usqp=CAU"
          />

          {/* <Button color="inherit">Button if required</Button> */}
          {/* </Grid> */}
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
