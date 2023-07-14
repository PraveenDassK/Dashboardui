import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel, latlonData }) => {
  return (
    <div>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
      <div className='map-bottom'>
        <div>Lat :{latlonData?.lat}</div>
        <div>Lon :{latlonData?.lng}</div>
      </div>
    </div>
  );
};

export default Map;

const LocationPin = ({ text }) => (
  <div className='pin'>
    <div>!</div>
    <p className='pin-text'>{text}</p>
  </div>
);
