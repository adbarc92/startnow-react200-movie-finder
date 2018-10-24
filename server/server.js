const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movie/:movieTitle', (req, res) => {
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.params.movieTitle}`
  }).then(response => {
    res.status(200).send(response.data);
  }).catch(err => {
    console.log('Error:', err);
  })
})

app.get('/detail/:id', (req, res) => {
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${req.params.id}`
  }).then(response => {
    console.log('response.data', response.data)
    res.status(200).send(response.data);
  }).catch(err => {
    console.log('Error:', err);
  })
})

module.exports = app;
