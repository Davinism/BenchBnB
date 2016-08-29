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
      console.log([newMarker.position.lat(), newMarker.position.lng()]);
      this.markers.push(newMarker);
    };

    const benchesArr = _benchesToAdd();
    benchesArr.forEach( bench => {
      _createMarkerFromBench(bench);
    });
  }

}

export default MarkerManager;
