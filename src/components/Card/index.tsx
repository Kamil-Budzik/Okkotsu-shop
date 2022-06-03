import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Anime from 'interfaces/Anime';

const CardComponent = ({ title, img, intro, slug }: Anime) => {
  return (
    <Card sx={{ maxWidth: 300, height: '100%' }}>
      <CardMedia component="img" height="160" image={img.url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intro}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Add to basket</Button>
        <Button variant="contained">Watch now</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
