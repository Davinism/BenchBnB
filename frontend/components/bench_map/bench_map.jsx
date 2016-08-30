import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

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

    this.map.addListener('idle', () => {
      const myLatLngBounds = this.map.getBounds();
      const northEast = myLatLngBounds.getNorthEast();
      const southWest = myLatLngBounds.getSouthWest();

      const bounds = {
        northEast: {lat: northEast.lat(), lng: northEast.lng()},
        southWest: {lat: southWest.lat(), lng: southWest.lng()}
      };

      this.props.updateBounds(bounds);

    });

    this.map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      this.props.router.push({
        pathname: "benches/new",
        query: {lat: lat, lng: lng}
      });
    });
  }

  componentDidUpdate(nextProps, nextState) {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default withRouter(BenchMap);
