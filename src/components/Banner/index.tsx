import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import IBanner from 'interfaces/IBanner';

const Banner = ({ link, img }: IBanner) => {
  return (
    <Container sx={{ position: 'relative', marginTop: '6em' }}>
      <Box
        component="img"
        src={img.url}
        sx={{
          width: '100%',
          height: 500,
          objectFit: 'cover',
        }}
      />
      <Link href={`/anime/${link}`}>
        <a>
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              left: '10%',
              bottom: '10%',
              width: 250,
              fontSize: '1.5rem',
              borderRadius: 30,
            }}
          >
            Watch now
          </Button>
        </a>
      </Link>
    </Container>
  );
};

export default Banner;
