import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const GenerateStars = (num: number) => {
  let stars = [];

  for (let i = 0; i < num; i++) {
    stars.push(<StarIcon key={i} />);
  }

  return <>{stars}</>;
};

export default GenerateStars;