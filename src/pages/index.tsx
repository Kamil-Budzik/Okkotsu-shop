import type { NextPage } from 'next';
import { gql, GraphQLClient } from 'graphql-request';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProductsList from 'containers/ProductsList';

import Anime from 'interfaces/Anime';

interface Props {
  animes: Anime[];
  isError: boolean;
}

const Home: NextPage = ({ animes, isError }: any) => {
  return (
    <section>
      <Box
        component="header"
        textAlign="center"
        sx={{ textAlign: 'center', margin: '2em 0' }}
      >
        <Typography variant="h2" component="h2" fontWeight={700}>
          Best Seller Products
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={500}>
          Anime you have to watch
        </Typography>
      </Box>
      {isError ? (
        <div>Sorry, but something went wrong. Please refresh the page.</div>
      ) : (
        <ProductsList animes={animes.animes} />
      )}
    </section>
  );
};

export const getServerSideProps = async () => {
  try {
    const query = gql`
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
    const client = new GraphQLClient(
      'https://api-eu-central-1.graphcms.com/v2/cl3vrwvusfviq01z1bph11p9v/master'
    );
    const data = await client.request(query);

    return {
      props: { animes: data, isError: false },
    };
  } catch {
    return {
      props: { animes: [], isError: true },
    };
  }
};

export default Home;
