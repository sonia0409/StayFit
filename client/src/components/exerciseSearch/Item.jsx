import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';



export default function Item(props) {

  const useStyles = makeStyles(theme => ({
    item: {
     background: '#2E3B55' ,
     color: '#FFC600',
     width: '100%',
     display: 'flex'
    },

    listItemText:{
      fontSize:'1.2rem',//Insert your required size
    }

  }));
  
  const classes = useStyles();

  return (
  
    <Box className={classes.item} sx={{ flexGrow: 1 }}>
      <Grid container spacing={"auto"}>
        <Grid item xs={12} md={12}>
          <div className="item">
            <List >
                <ListItem 
                  secondaryAction={
                    <IconButton className={classes.item} onClick={() => props.onClick(props.exerciseItem)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FitnessCenterIcon style={{color:"1976d2"}}/>
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText classes={{primary:classes.listItemText}}
                    primary={props.exerciseItem}
                  />
                </ListItem>
            </List>
            </div>
        </Grid>
      </Grid>
    </Box>
   
  );
}
