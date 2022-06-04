import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: '#FF4444', width: '100%', padding: '2em 0' }}
      mt={24}
    >
      <Container
        component="footer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          color: 'white',
        }}
      >
        <Link href="/" passHref>
          <Box
            component="a"
            sx={{ padding: '.3em', color: 'inherit', cursor: 'pointer' }}
          >
            <Typography component="header" variant="h4" fontWeight={700}>
              O<span className="black">kk</span>otsu{' '}
              <span className="black">s</span>
              hop
            </Typography>
          </Box>
        </Link>
        <Typography component="p" variant="h4">
          Created by{' '}
          <Box
            component="a"
            href="https://kamil-budzik.com/"
            sx={{
              color: 'inherit',
              fontWeight: 700,
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Kamil Budzik
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
