import React from 'react';
import { useRouter } from 'next/router';

const AnimePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Anime page {slug}</h1>
    </div>
  );
};

export default AnimePage;
