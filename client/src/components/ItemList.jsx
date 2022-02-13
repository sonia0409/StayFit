import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Item from './Item'


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ItemList(props) {
  const {header, exerciseList, onClick} = props;

  const nameList = exerciseList.map(element => <Item key={exerciseList.indexOf(element)} exerciseItem={element} onClick={onClick} />)

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={"auto"}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {header}
          </Typography>
          {nameList}
          <Demo>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
