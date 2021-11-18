export const Movie = {
  create: (persistence) => ({
    id: persistence.id,
    title: persistence.title,
    overview: persistence.overview,
    releaseDate: persistence.release_date,
    posterPath: persistence.poster_path,
  }),
};
