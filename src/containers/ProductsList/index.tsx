import React from 'react';
import Anime from '../../interfaces/Anime';

interface Props {
  animes: Anime[];
}

const ProductsList = ({ animes }: Props) => {
  console.log(animes);
  return (
    <div>
      <h1>PRODUCT LIST</h1>
    </div>
  );
};

export default ProductsList;
