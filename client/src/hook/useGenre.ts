import { useCallback, useState } from "react";
import { errorNotification } from "../utils/alert";
import { GENRE_END_PONT } from "../utils";
import { GenreType } from "../models/movieType";

type GenreHookType = {
  fetchGenre: () => void;
  data: GenreType[];
  loading: boolean;
  setDropdown: (v: boolean) => void;
  dropDown: boolean;
};

export const useGenre = (): GenreHookType => {
  const [data, setData] = useState<GenreType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dropDown, setDropdown] = useState<boolean>(false);

  const fetchGenre = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(GENRE_END_PONT);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.data);
      setDropdown(true);
    } catch (error) {
      errorNotification((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchGenre,
    data,
    loading,
    setDropdown,
    dropDown,
  };
};
