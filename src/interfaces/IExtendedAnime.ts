interface Image {
  id: string;
  url: string;
}

export default interface IExtendedAnime {
  id: string;
  title: string;
  images: Image[];
  intro: string;
  desc: {
    html: string;
  };
  price: number;
  stars: number;
}
