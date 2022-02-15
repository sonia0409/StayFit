import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={() => navigate(-1)} variant="contained">Back</Button>
      {/* <div onClick={() => navigate(-1)}><ArrowBackIosIcon/></div> */}
    </Stack>
  );
}