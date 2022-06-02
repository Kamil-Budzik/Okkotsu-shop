import type { NextPage } from 'next';
import { gql, GraphQLClient } from 'graphql-request';

import ProductsList from 'containers/ProductsList';

import Anime from 'interfaces/Anime';

interface Props {
  animes: Anime[];
  isError: boolean;
}

const Home: NextPage = ({ animes, isError }: any) => {
  return (
    <section>
      <header>
        <h2>Best Seller Products</h2>
        <h3>Anime you have to watch</h3>
      </header>
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
