import React from 'react';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="map-container" ref="map">This is the map!</div>
    );
  }
}

export default BenchMap;
