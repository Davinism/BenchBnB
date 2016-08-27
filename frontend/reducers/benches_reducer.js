import { BenchConstants } from '../actions/bench_actions';
// Importing "merge" from lodash

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      const returnObj = {};
      action.benches.forEach( bench => {
        returnObj[bench.id] = bench;
      });
      return returnObj;
    default:
      return state;
  }
};

export default BenchesReducer;
