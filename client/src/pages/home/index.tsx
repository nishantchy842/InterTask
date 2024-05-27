import MovieCard from "../../components/card/movieCard";
import { useMovieData } from "../../hook";
import Loader from "../../components/loader";

export const Home = () => {
  const [allMovieProps] = useMovieData();

  const { allMovie, loading } = allMovieProps;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" ">
      <ul className="divide-y divide-slate-100 grid grid-cols-2 gap-[20px] md:grid-cols-2 sm:grid-cols-1">
        {allMovie.map((item) => (
          <a href={"/" + item.id} key={item.id}>
            <MovieCard movie={item} />
          </a>
        ))}
      </ul>
    </div>
  );
};
