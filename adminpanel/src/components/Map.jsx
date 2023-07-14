import React from "react";
//package to get gmap from lngandlat 
import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel, latlonData }) => {
  return (
    <div>
      <div className='google-map'>
        {/* dont  have a google api key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}>
          <LocationPin
            lat={latlonData?.lat}
            lng={latlonData?.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
      <div className='map-bottom'>
        <div className='lat_text'>
          Lat:<div className='lat_value'>{`${latlonData?.lat}`}</div>
        </div>
        <div className='lat_text'>
          Lng:<div className='lat_value'>{`${latlonData?.lng}`}</div>
        </div>
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
