// import { useLocation } from "react-router-dom";
import { MovieType } from "../../models/movieType";
import MovieCard from "../../components/card/movieCard";

export const Home = () => {
  //   const params = useLocation();

  const arr: MovieType[] = [
    {
      id: 19,
      title: "The Avengers",
      year: 2012,
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: 8,
      director: "Joss Whedon",
      actors: [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
        "Mark Ruffalo",
        "Mark Ruffalo",

        "Mark Ruffalo",
      ],
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster: "https://fakeimg.pl/220x310/ff0000",
      trailer: "https://example.com/the_avengers_trailer.mp4",
      runtime: 143,
      awards: "Nominated for 1 Oscar",
      country: "USA",
      language: "English",
      boxOffice: "$1.518 billion",
      production: "Marvel Studios",
      website: "https://www.marvel.com/movies/the-avengers",
    },
    {
      id: 20,
      title: "The Lion King",
      year: 1994,
      genre: ["Animation", "Adventure", "Drama"],
      rating: 8.5,
      director: "Roger Allers, Rob Minkoff",
      actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      poster: "https://fakeimg.pl/220x310/0000ff",
      trailer: "https://example.com/the_lion_king_trailer.mp4",
      runtime: 88,
      awards: "Won 2 Oscars",
      country: "USA",
      language: "English",
      boxOffice: "$968.5 million",
      production: "Walt Disney Pictures",
      website: "https://movies.disney.com/the-lion-king",
    },
  ];

  return (
    <div className=" ">
      <ul className="divide-y divide-slate-100 grid grid-cols-2 gap-x-[20px]">
        {arr.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </ul>
    </div>
  );
};
