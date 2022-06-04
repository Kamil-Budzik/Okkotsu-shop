import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Header from './Header';
import ButtonsWrapper from './ButtonsWrapper';
 
interface Props {
  title: string;
  stars: number;
  intro: string;
  price: number;
}

const SingleAnimeCard = ({ title, stars, intro, price }: Props) => {
  return (
    <Grid item xs={12} md={6}>
      <Header title={title} stars={stars} intro={intro} />
      <Typography variant="h4" component="p" mt={2} mb={2}>
        ${price}
      </Typography>
      <ButtonsWrapper />
    </Grid>
  );
};

export default SingleAnimeCard;
