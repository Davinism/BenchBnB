import { FilterConstants } from '../actions/filter_actions';
// Import "merge" from lodash?

const defaultState = {
  bounds: {}
};

const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      return { bounds: action.bounds };
    default:
      return state;
  }
};

export default FilterReducer;
