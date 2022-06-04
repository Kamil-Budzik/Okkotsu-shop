import React, { useState } from 'react';
import { gql, GraphQLClient } from 'graphql-request';

import IExtendedAnime from 'interfaces/IExtendedAnime';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import StarIcon from '@mui/icons-material/Star';
import NoSsr from 'helpers/noSsr';
import generateStars from 'helpers/generateStars';

interface Props {
  isError: boolean;
  anime: IExtendedAnime;
}

const AnimePage = ({ anime, isError }: Props) => {
  const { title, images, desc, intro, price, stars } = anime;
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Grid container spacing={12}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'grid', justifyItems: 'center' }}
          >
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
              {images.map((image, index) => (
                <ListItem key={image.id}>
                  <Box
                    onClick={() => setActiveImgIndex(index)}
                    component="img"
                    src={image.url}
                    alt={title}
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
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <header>
              <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                gutterBottom
              >
                {title}
              </Typography>
              <Box sx={{ margin: '1em 0' }}>
                {}
                {generateStars(stars)}
              </Box>
              <Typography variant="body2" component="p">
                {intro}
              </Typography>
            </header>
            <Typography variant="h4" component="p" mt={2} mb={2}>
              ${price}
            </Typography>
            <Box component="div" sx={{ display: 'flex', marginTop: '1em' }}>
              <Button variant="outlined">Add to basket</Button>
              <Button variant="contained" sx={{ marginLeft: '1em' }}>
                Watch now
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '800px', marginTop: '5em' }}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight={500}
              gutterBottom
            >
              Description:
            </Typography>
            <NoSsr>
              <Typography variant="body2" component="p">
                <span
                  dangerouslySetInnerHTML={{ __html: desc.html }}
                  className="desc"
                />
              </Typography>
            </NoSsr>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

interface Params {
  params: {
    slug: string;
  };
}

export const getServerSideProps = async ({ params: { slug } }: Params) => {
  try {
    const animeQuery = gql`
      query MyQuery {
        anime(where: { slug: "${slug}" }) { 
          id
          title
          stars
           desc {
              html
          }
          price
          intro
          images {
            id
            url 
          }
        }
      }
    `;

    const client = new GraphQLClient(
      'https://api-eu-central-1.graphcms.com/v2/cl3vrwvusfviq01z1bph11p9v/master'
    );
    const data = await client.request(animeQuery);

    return {
      props: { anime: data.anime, isError: false },
    };
  } catch {
    return {
      props: { anime: [], isError: true },
    };
  }
};

export default AnimePage;
