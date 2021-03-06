import type { NextPage } from 'next';
import { gql, GraphQLClient } from 'graphql-request';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProductsList from 'components/ProductsList';
import Banner from 'components/Banner';

import Anime from 'interfaces/Anime';
import IBanner from 'interfaces/IBanner';

interface Props {
  animes: { animes: Anime[] };
  isError: boolean;
  banner: { banners: IBanner[] };
}

const Home = ({ animes, isError, banner }: Props) => {
  const bannerItem = banner.banners[0];

  return (
    <main style={{ marginTop: '3em' }}>
      <Banner id={bannerItem.id} link={bannerItem.link} img={bannerItem.img} />
      <section>
        <Box
          component="header"
          textAlign="center"
          sx={{ textAlign: 'center', margin: '2em 0' }}
        >
          <Typography variant="h4" component="h2" fontWeight={700}>
            Best Seller Products
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={500}>
            Anime you have to watch
          </Typography>
        </Box>
        {isError ? (
          <div>Sorry, but something went wrong. Please refresh the page.</div>
        ) : (
          <ProductsList animes={animes.animes} />
        )}
      </section>
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const animeQuery = gql`
      query MyQuery {
        animes {
          id
          title
          intro
          slug
          img {
            url
          }
        }
      }
    `;

    const bannerQuery = gql`
      query MyQuery {
        banners {
          id
          link
          img {
            url
          }
        }
      }
    `;

    const client = new GraphQLClient(
      'https://api-eu-central-1.graphcms.com/v2/cl3vrwvusfviq01z1bph11p9v/master'
    );
    const animeData = await client.request(animeQuery);
    const bannerData = await client.request(bannerQuery);

    return {
      props: { animes: animeData, banner: bannerData, isError: false },
    };
  } catch {
    return {
      props: { animes: [], banner: [], isError: true },
    };
  }
};

export default Home;
