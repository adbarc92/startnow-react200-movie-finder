const axios = require('axios');


export const getDetail = (imdbID) => ({
  type: 'GET_DETAIL',
  payload: axios.get(`/detail/${imdbID}`)
});
