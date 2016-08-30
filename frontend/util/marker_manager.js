class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {

    const _benchesToAdd = () => {
      const resultArr = [];
      const latArr = this.markers.map(marker => {
        return marker.position.lat;
      });
      const lngArr = this.markers.map(marker => {
        return marker.position.lng;
      });

      Object.keys(benches).forEach( key => {
        if (!latArr.includes(benches[key].lat) || !lngArr.includes(benches[key].lng)) {
          resultArr.push(benches[key]);
        }
      });

      return resultArr;
    };

    const _createMarkerFromBench = (bench, markers) => {
      let newMarker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: this.map,
        title: bench.description
      });
      this.markers.push(newMarker);
    };

    const benchesArr = _benchesToAdd();
    const removeMarkersArr = this._markersToRemove(benches);

    benchesArr.forEach( bench => {
      _createMarkerFromBench(bench);
    });
    removeMarkersArr.forEach( marker => {
      this._removeMarker(marker);
    });
  }

  _markersToRemove(benches) {
    const resultsArr = [];
    const latLngArr = [];

    Object.keys(benches).forEach (key => {
      latLngArr.push([benches[key].lat, benches[key].lng]);
    });


    this.markers.forEach( marker => {
      let placeInResults = true;
      latLngArr.forEach( latLng => {
        if (latLng[0] === marker.position.lat && latLng[1] === marker.position.lng) {
          placeInResults = false;
        }
      });

      if (placeInResults) {
        resultsArr.push(marker);
      }
    });

    return resultsArr;
  }

  _removeMarker(marker) {
    marker.setMap(null);
  }

}

export default MarkerManager;
