import { BenchConstants, receiveBenches } from '../actions/bench_actions';
import * as API from '../util/bench_api_util';

// The first argument is simply object deconstruction of the store.
const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      API.fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
