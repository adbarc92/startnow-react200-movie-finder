import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { movies } = this.props;
    console.log(movies);

    return (
      <div className='container'>
        <ul className='row justify-content-center p-0 m-0'>
          {
            movies.map(movie => (
              < li className='bg-light border border-dark col-12 mt-3 mb-3' >
                <div className='container'>
                  <div className='row'>
                    <img className='col-3' src={movie.Poster} />
                    <div className='col-9'>
                      <h4>{movie.Title}</h4>
                      <p>{movie.Year}</p>
                      <hr />
                      <Link to={`/movie/${movie.imdbID}`}>More Information</Link>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
