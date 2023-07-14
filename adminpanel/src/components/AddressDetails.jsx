import React from "react";
import Map from "./Map";
const AddressDetails = ({ addressData }) => {
  console.log(addressData, "this is address data");
  const userDetailsData = [
    {
      title: "Street",
      value: addressData?.street,
    },
    {
      title: "Suite",
      value: addressData?.suite,
    },
    {
      title: "City",
      value: addressData?.city,
    },
    {
      title: "Zipcode",
      value: addressData?.zipcode,
    },
  ];
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div>
      <div className='address-header'>Address:</div>
      {userDetailsData.map((eachValue, index) => {
        return (
          <div className='address-details' key={index}>
            <div className='address-title'>{`${eachValue.title}`} </div>
            <div> : </div>
            <div className='address-value'> {eachValue.value}</div>
          </div>
        );
      })}
      <div style={{ padding: "2% 0%", marginLeft: "20%" }}>
        <Map location={location} zoomLevel={8} latlonData={addressData?.geo} />
      </div>
    </div>
  );
};

export default AddressDetails;
