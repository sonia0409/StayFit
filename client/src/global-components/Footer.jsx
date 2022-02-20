import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CreateIcon from "@mui/icons-material/Create";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const [value, setValue] = useState(0);
  const useStyles = makeStyles(theme => ({
    footer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 55,
      padding:0,
      textAlign: 'space-evenly',
    }
  }));
  
  const classes = useStyles();
  const navigate = useNavigate()
  const handleClick = (name) => {
    navigate(name)
  }

  return (

      <Box className={classes.footer}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Dashboard" icon={<CreateIcon onClick={() => {handleClick('/')}} />} />
          <BottomNavigationAction label="Exercises" icon={<FitnessCenterIcon onClick={() => {handleClick('/exerciseCategory')}}/>} /> 
          <BottomNavigationAction
            label="Calender"
            icon={<DateRangeTwoToneIcon onClick={() => {handleClick('/Calender')}} />}
          />
        </BottomNavigation>
      </Box>
  
  );
}