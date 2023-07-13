import React from "react";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";
const UserList = ({ userData }) => {
  const navigate = useNavigate();
  //function for navigate to profile page
  const handleNavigate = () => {
    navigate("/profile");
  };
  return (
    <div className='main-container'>
      <div className='header'>Select Account</div>
      <div style={{ padding: " 0% 5%" }}>
        {userData.map((eachValue, index) => {
          return (
            <div className='userlist' key={index} onClick={handleNavigate}>
              <img
                alt='profile_image'
                src={eachValue?.profilepicture}
                className='image_icon'
              />
              <div className='userlist-person_name'>{eachValue?.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
