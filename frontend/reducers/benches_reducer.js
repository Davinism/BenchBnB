import { BenchConstants } from '../actions/bench_actions';
// Importing "merge" from lodash

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default BenchesReducer;
