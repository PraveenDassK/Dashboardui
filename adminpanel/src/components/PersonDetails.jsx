import React from "react";
import ProfileImage from "../assests/images/teamsbk_icon.jpeg";
import "../styles/Profile.css";
const PersonDetails = ({ userData }) => {
  const userDetailsData = [
    {
      title: "Username",
      value: userData?.[0]?.username,
    },
    {
      title: "e-mail",
      value: userData?.[0]?.email,
    },
    {
      title: "Phone",
      value: userData?.[0]?.phone,
    },
    {
      title: "Website",
      value: userData?.[0]?.website,
    },
  ];
  return (
    <div className='profileDetails_container'>
      <div className='image-container'>
        <img
          src={userData?.[0]?.profilepicture}
          alt={"profile_image"}
          className='profile-image'
        />
        <div>{userData?.[0]?.name}</div>
      </div>
      {userDetailsData.map((eachValue, index) => {
        return (
          <div className='name-details' key={index}>
            <div className='details-title'>{`${eachValue.title}`} </div>
            <div> : </div>
            <div className='details-value'> {eachValue.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonDetails;
