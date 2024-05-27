import { useLocation, useParams } from "react-router-dom";
import { MOVIE_END_PONT } from "../utils";
import { useEffect, useState } from "react";
import { MovieType } from "../models/movieType";
import { errorNotification } from "../utils/alert";

export const useMovieData = () => {
  const location = useLocation();

  console.log(location);

  const { pathname, state } = location;

  const [allMovie, SetAllMovie] = useState<MovieType[]>([]);

  const [loading, setLoading] = useState(false);

  const getAllMovie = async () => {
    try {
      setLoading(true);

      const title = state ? "?title=" + state.title : "";

      await fetch(MOVIE_END_PONT + `${pathname}${title}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          setLoading(false);
          SetAllMovie(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMovie();
  }, [pathname, state]);

  const allMovieProps = {
    allMovie,
    loading,
  };

  return [allMovieProps];
};

export const useMovieDetails = (): [MovieType | undefined, boolean] => {
  const params = useParams();

  const [detailsData, setDetailsData] = useState();

  const [loading, setLoading] = useState(false);

  const { id } = params;

  const fetchDetailsData = async () => {
    setLoading(true);
    try {
      await fetch(MOVIE_END_PONT + `/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setDetailsData(data.data);
        })
        .catch((err) => {
          setLoading(false);
          errorNotification(err.message);
        });
    } catch (error) {
      setLoading(false);
      errorNotification("Something went wrong");
    }
  };

  useEffect(() => {
    fetchDetailsData();
  }, []);

  return [detailsData, loading];
};
