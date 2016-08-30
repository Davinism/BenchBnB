import { BenchConstants } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      const returnObj = {};
      action.benches.forEach( bench => {
        returnObj[bench.id] = bench;
      });
      return returnObj;
    case BenchConstants.RECEIVE_BENCH:
      const newBench = {[action.bench.id]: action.bench};
      return merge({}, state, newBench);
    default:
      return state;
  }
};

export default BenchesReducer;
