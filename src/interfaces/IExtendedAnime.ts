interface Image {
  id: string;
  url: string;
}

export default interface IExtendedAnime {
  id: string;
  title: string;
  desc: string;
  images: Image[];
}
