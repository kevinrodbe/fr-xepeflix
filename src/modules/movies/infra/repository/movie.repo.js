import { fetcher } from '../../../../infra/http';
import { BASE_API, TMDB_KEY } from '../../../../constants';

const http = fetcher({
  baseURL: `${BASE_API}movie/`,
  params: {
    api_key: TMDB_KEY,
    language: 'es-pe',
    page: 1,
  },
});

export const getPopulars = () => {
  return http.get(`popular`);
};

export const getTopRated = () => {
  return http.get(`top_rated`);
};

export const getUpcoming = () => {
  return http.get(`upcoming`);
};

export const getMovie = (id) => {
  return http.get(id);
};
