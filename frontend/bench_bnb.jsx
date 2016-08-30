import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/bench_actions';
import * as FILTER_ACTIONS from './actions/filter_actions';
import * as API from './util/bench_api_util';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = window.Store = configureStore();
  // window.requestBenches = ACTIONS.requestBenches;
  // window.updateBounds = FILTER_ACTIONS.updateBounds;
  // window.success = (data) => console.log(data);
  // window.filter = {
  //   bounds: {
  //     northEast: {lat: 37.85, lng: -122.35},
  //     southWest: {lat: 37.75, lng: -122.50}
  //   }
  // };
  // window.fetchBenches = API.fetchBenches;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store}/>, root);
});
