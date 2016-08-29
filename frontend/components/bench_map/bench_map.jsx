import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate(nextProps, nextState) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default BenchMap;

// AIzaSyCQBxiR0WdkiWU6Fj3RNQNrOMqkmg7hD_U
