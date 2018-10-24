import React from 'react';
import Search from '../components/Search';
import Result from '../components/Result';

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>Movie Finder</h1>
        <div className='row'>
          <Search className='col-12' />
        </div>
        <div className='row'>
          <Result className='col-12' />
        </div>
      </div >
    )
  }
}
