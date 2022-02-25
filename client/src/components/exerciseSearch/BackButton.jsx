import * as React from 'react';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Stack >
     {/*  <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon/></Button> */}
      <div className='left-arrow' onClick={() => navigate(-1)}><ArrowBackIosIcon/></div>
    </Stack>
  );
}