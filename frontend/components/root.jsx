import React from 'react';
import { Provider } from 'react-redux';

import BenchIndexContainer from './bench/bench_index_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BenchIndexContainer />
    </Provider>
  );
};

export default Root;