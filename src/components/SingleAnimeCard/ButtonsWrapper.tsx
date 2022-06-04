import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ButtonsWrapper = () => {
  return (
    <Box component="div" sx={{ display: 'flex', marginTop: '1em' }}>
      <Button variant="outlined">Add to basket</Button>
      <Button variant="contained" sx={{ marginLeft: '1em' }}>
        Watch now
      </Button>
    </Box>
  );
};

export default ButtonsWrapper;