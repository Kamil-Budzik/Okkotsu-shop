import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        backgroundColor: 'white',
        padding: '1em 0',
      }}
    >
      <Link href="/" passHref>
        <Box
          component="a"
          sx={{ padding: '.3em', color: 'black', cursor: 'pointer' }}
        >
          <Typography component="header" variant="h4" fontWeight={700}>
            O<span className="red">kk</span>otsu <span className="red">s</span>
            hop
          </Typography>
        </Box>
      </Link>

      <ShoppingBasketIcon
        sx={{
          fontSize: '2rem',
          cursor: 'pointer',
          transition: '.4s ease-in-out',
          ':hover': { transform: 'scale(1.2)' },
        }}
      />
    </Container>
  );
};

export default Header;
