export type MovieType = {
  id: string;
  title: string;
  year: number;
  genres: GenreType[];
  rating: number;
  director: string;
  summary: string;
  plot: string;
  image: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};

export type GenreType = {
  title: string;
  id: string;
};
