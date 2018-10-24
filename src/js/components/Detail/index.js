import { connect } from 'react-redux';
import Detail from './Detail';

function mapStoreToProps(store) {
  return {
    movie: store.detail.movie
  };
}

export default connect(mapStoreToProps)(Detail);
