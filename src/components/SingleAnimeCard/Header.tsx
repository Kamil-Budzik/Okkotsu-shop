import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import generateStars from 'helpers/generateStars';

interface Props {
  title: string;
  intro: string;
  stars: number;
}

const Header = ({ title, intro, stars }: Props) => {
  return (
    <header>
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Box sx={{ margin: '1em 0' }}>{generateStars(stars)}</Box>
      <Typography variant="body2" component="p">
        {intro}
      </Typography>
    </header>
  );
};

export default Header;