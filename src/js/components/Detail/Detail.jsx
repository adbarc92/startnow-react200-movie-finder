import React, { Component } from 'react';
import { getDetail } from './DetailActions';
import { Link } from 'react-router-dom';

//Viewing movie {this.props.match.params.id}

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDetail(this.props.id))
  }

  render() {

    const { movie } = this.props;

    return (
      <div className='container'>
        <div className='row'>
          <img className='col-6' src={movie} />
          <div className='col-6'>
            <div className='card'>
              <div className='card-header'>Movie Details</div>
              <div className='card-body'>
                <h2 id='title'>{movie.Title}</h2>
                <p>{movie.Year}</p>
                <p>{movie.Rated}</p>
                <hr></hr>
                <p>{movie.Plot}</p>
                <br></br>
                <p>{movie.Awards}</p>
                <br></br>
                <h6 className='metascore'>Metascore: {movie.Metascore}/100</h6>
                <h6>IMDB: {movie.imdbRating}/10</h6>
                <br></br>
                <Link className='home-link' to='/'>Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
