import { connect } from 'react-redux';
import Result from './Result';

function mapStoreToProps(store) {
  return {
    movies: store.search.movies
  };
}

export default connect(mapStoreToProps)(Result);
