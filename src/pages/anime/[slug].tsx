import React from 'react';
import { useRouter } from 'next/router';
import { gql, GraphQLClient } from 'graphql-request';

import IExtendedAnime from 'interfaces/IExtendedAnime';

interface Props {
  isError: boolean;
  anime: IExtendedAnime;
}

const AnimePage = ({ anime, isError }: Props) => {
  console.log(anime);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Anime page {slug}</h1>
    </div>
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
          desc
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
