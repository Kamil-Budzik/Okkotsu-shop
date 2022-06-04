import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';

import IExtendedAnime from 'interfaces/IExtendedAnime';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SingleAnimeImages from 'components/SingleAnimeImages';
import SingleAnimeCard from 'components/SingleAnimeCard';
import SingleAnimeDesc from 'components/SingleAnimeDesc';

interface Props {
  isError: boolean;
  anime: IExtendedAnime;
}

const AnimePage = ({ anime, isError }: Props) => {
  const { title, images, desc, intro, price, stars } = anime;

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '150px',
      }}
    >
      <div>
        <Grid container spacing={12}>
          <SingleAnimeImages title={title} images={images} />
          <SingleAnimeCard
            title={title}
            stars={stars}
            intro={intro}
            price={price}
          />
        </Grid>
        <SingleAnimeDesc desc={desc} />
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
