const defaultState = {
  movieTitle: '',
  movies: []
}

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_TITLE': {
      return {
        ...state,
        movieTitle: payload.movieTitle
      }
    }
    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        movies: payload.data.Search
      }
    }
    default: {
      return state;
    }
  }
}
