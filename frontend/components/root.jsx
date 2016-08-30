import React from 'react';
import { Provider } from 'react-redux';

import SearchContainer from './bench/search_container';
import BenchIndexContainer from './bench/bench_index_container';

import AppRouter from './router';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default Root;
