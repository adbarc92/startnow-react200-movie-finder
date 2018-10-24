import { combineReducers } from 'redux';
import SearchReducer from './components/Search/SearchReducer';
import DetailReducer from './components/Detail/DetailReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  detail: DetailReducer
})

export default rootReducer;
