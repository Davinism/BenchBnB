import { connect } from 'react-redux';
import Search from './search';
import { requestBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
