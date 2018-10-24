const axios = require('axios');

export const updateTitle = (movieTitle) => ({
  type: 'UPDATE_TITLE',
  payload: { movieTitle }
});

export const getMovies = (movieTitle) => ({
  type: 'GET_MOVIE',
  payload: axios.get(`/movie/${movieTitle}`)
});
