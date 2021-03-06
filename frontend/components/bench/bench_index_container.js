// NOTE!! We are no longer using this component. This was included only
// as history. Refer to the SearchContainer instead!

import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { requestBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
