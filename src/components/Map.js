import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "../styles/Map.css";

const MapComponent = withScriptjs(
  withGoogleMap(({ markers }) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {markers.map((marker, i) => {
        let obj = {
          lat: +marker.lat,
          lng: +marker.lng,
        };
        return <Marker key={i} position={obj} />;
      })}
    </GoogleMap>
  ))
);

const Map = ({ markers }) => {
  return (
    <div className="map">
      <MapComponent
        markers={markers}
        isMarkerShown
        googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCspmHmNXF88i1_ZOJ8Zba7vyK_cEgQ3hs"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`, width: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
