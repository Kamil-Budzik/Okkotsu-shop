import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Image from './Image';

import { Image as IImage } from 'interfaces/IExtendedAnime';

interface Props {
  title: string;
  images: IImage[];
}

const SingleAnimeImages = ({ images, title }: Props) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleClick = (i: number) => setActiveImgIndex(i);

  return (
    <Grid item xs={12} md={6} sx={{ display: 'grid', justifyItems: 'center' }}>
      <Box
        component="img"
        sx={{ objectFit: 'cover', width: '100%', borderRadius: '15px' }}
        src={images[activeImgIndex].url}
        alt={title}
      />
      <List
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        {images.map(({ url, id }, index) => (
          <Image url={url} click={handleClick} key={id} index={index} />
        ))}
      </List>
    </Grid>
  );
};

export default SingleAnimeImages;
