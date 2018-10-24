const defaultState = {
  movie: {}
}

export default function DetailReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_DETAIL_FULFILLED': {
      return {
        ...state,
        movie: payload.data
      }
    }
    default: {
      return state;
    }
  }
}

