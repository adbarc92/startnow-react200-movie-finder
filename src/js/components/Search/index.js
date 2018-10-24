import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movieTitle: store.search.movieTitle
  };
}

export default connect(mapStoreToProps)(Search);
