import useSWRImmutable from 'swr/immutable';

import { getMovie, getPopulars, getTopRated, getUpcoming } from '../../infra/repository/movie.repo';
import { MovieMap } from '../../mappers/movie.map';

export const usePopularMovie = () => {
  const { data, error } = useSWRImmutable(`popular`, getPopulars);

  return {
    populars: data?.results.map(MovieMap.toDomain),
    isLoading: !error && !data,
    isError: error,
  };
};

export const useTopRatedMovie = () => {
  const { data, error } = useSWRImmutable(`top_rated`, getTopRated);

  return {
    topRated: data?.results.map(MovieMap.toDomain),
    isLoading: !error && !data,
    isError: error,
  };
};

export const useUpcomingMovie = () => {
  const { data, error } = useSWRImmutable(`upcoming`, getUpcoming);

  return {
    upcoming: data?.results.map(MovieMap.toDomain),
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMovieDetail = (id) => {
  const { data, error } = useSWRImmutable(id, getMovie);

  return {
    movie: MovieMap.toDomain(data),
    isLoading: !error && !data,
    isError: error,
  };
};
