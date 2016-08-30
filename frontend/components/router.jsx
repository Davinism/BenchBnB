import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './bench/search_container';
import BenchFormComponent from './bench_form/bench_form_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ SearchContainer } />
      <Route path="/benches/new" component={ BenchFormComponent } />
    </Route>
  </Router>
);

export default AppRouter;
