import MovieCard from "../../components/card/movieCard";
import { useMovieData } from "../../hook";
import Loader from "../../components/loader";
import CustomSpinner from "../../components/customSpinner";

export const Home = () => {
  const [allMovieProps] = useMovieData();

  const { allMovie, loading } = allMovieProps;

  if (loading) {
    return <Loader />;
  }

  return (
    <CustomSpinner spinning={loading}>
      <ul className="divide-y divide-slate-100 grid grid-cols-2 gap-[20px] md:grid-cols-2 sm:grid-cols-1">
        {allMovie.map((item) => (
          <MovieCard movie={item} key={item.id} />
        ))}
      </ul>
    </CustomSpinner>
  );
};
