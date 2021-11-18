import { Movie } from '../domain/movie';

export const MovieMap = {
  toDomain: (raw) => Movie.create(raw),
  toPersistence: (movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    release_date: movie.releaseDate,
    poster_path: movie.posterPath,
  }),
};
