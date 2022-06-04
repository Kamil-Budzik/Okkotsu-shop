import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';

interface Props {
  url: string;
  click: (a: number) => void;
  index: number;
}

const Image = ({ url, click, index }: Props) => {
  return (
    <ListItem sx={{ width: 'auto' }}>
      <Box
        onClick={() => click(index)}
        onMouseEnter={() => click(index)}
        component="img"
        src={url}
        alt="anime image"
        width={120}
        sx={{
          borderRadius: '15px',
          cursor: 'pointer',
          transition: '.4s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
    </ListItem>
  );
};

export default Image;
