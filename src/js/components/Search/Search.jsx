import React, { Component } from 'react';

import { updateTitle, getMovies } from './SearchActions';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateTitle(value));
  }

  handleSearch(e) {
    e.preventDefault();
    const { movieTitle, dispatch } = this.props;
    dispatch(getMovies(movieTitle));
  }

  render() {

    const { movieTitle } = this.props;

    return (
      <div>
        <h1></h1>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='input-group'>
              <input name='search' type='text' className='form-control' placeholder='e.g Thor: Ragnarok' value={movieTitle} onChange={this.handleInput} />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' id='search' onClick={this.handleSearch} type='submit'>Go!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
