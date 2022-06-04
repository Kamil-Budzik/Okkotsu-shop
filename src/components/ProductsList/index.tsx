import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from 'components/Card';

import Anime from 'interfaces/Anime';

interface Props {
  animes: Anime[];
}

const ProductsList = ({ animes }: Props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {animes.map((anime) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={anime.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card {...anime} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
