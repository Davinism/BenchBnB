import { BenchConstants, receiveBenches, requestBenches } from '../actions/bench_actions';
import { FilterConstants, updateBounds } from '../actions/filter_actions';
import * as API from '../util/bench_api_util';

// The first argument is simply object deconstruction of the store.
const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      const filters = getState().filters;
      API.fetchBenches(filters, success);
      return next(action);
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
