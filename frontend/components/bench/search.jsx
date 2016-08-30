import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from './bench_index';

// NOTE: Ask why we need to specifically pass the props because I thought
// the whole point of the "connect" function was so that we don't have
// to pass the props explicitly.

const Search = ({benches, requestBenches, updateBounds}) => {
  return(
    <div>
      <BenchMap benches={benches} updateBounds={updateBounds} />
      <BenchIndex benches={benches} requestBenches={requestBenches} />
    </div>
  );
};

export default Search;
