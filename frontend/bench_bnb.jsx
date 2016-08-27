import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/bench_actions';
import * as API from './util/bench_api_util';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = window.Store = configureStore();
  window.requestBenches = ACTIONS.requestBenches;
  window.success = (data) => console.log(data);
  window.fetchBenches = API.fetchBenches;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store}/>, root);
});
