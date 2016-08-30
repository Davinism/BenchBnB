import { combineReducers } from 'redux';
import BenchesReducer from './benches_reducer.js';
import FilterReducer from './filter_reducer.js';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  filters: FilterReducer
});

export default RootReducer;
