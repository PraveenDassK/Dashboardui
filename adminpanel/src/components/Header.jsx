import React, { useState } from "react";
import "../styles/Header.css";
import ProfileImage from "../assests/images/teamsbk_icon.jpeg";
import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";
import { useNavigate } from "react-router-dom";

const Header = ({ name, userData, selectedUser }) => {
  //state for modalvisibility
  const [isModalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();
  //function for navigate to profile page
  const handleNavigate = (eachValue) => {
    //passing id with identifier to profile page
    const queryParams = new URLSearchParams();
    queryParams.set("id", JSON.stringify(eachValue?.id));
    setModalVisible(false);
    localStorage.removeItem("StoredValue");

    navigate(`/Profile?${queryParams.toString()}`);
  };

  //function for signout

  const handleSignout = () => {
    setModalVisible(false);

    navigate("/");
  };

  //custom styleformodal
  const customStyles = {
    top: "-20%",
    left: "65%",
    borderRadius: "5%",
    width: "20%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "column",
    overflow: "auto",
    height: "55%",
  };
  return (
    <div className='header-container'>
      {/* used replace to remove / from path name */}
      <div className='profile-text'>{name.replace("/", "")}</div>
      <div
        className='right-header-container'
        onClick={() => setModalVisible(true)}>
        <div>
          <img
            alt='header_image'
            src={selectedUser?.[0]?.profilepicture}
            style={{ height: "30px", width: "30px", borderRadius: "25%" }}
          />
        </div>
        <div className='name'>{selectedUser?.[0]?.name}</div>
      </div>
      <Rodal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        customStyles={customStyles}
        // showMask={false}
        showCloseButton={false}>
        <img
          alt='header_image'
          src={selectedUser?.[0]?.profilepicture}
          style={{ height: "70px", width: "70px", borderRadius: "35px" }}
        />
        <div>{selectedUser?.[0]?.name}</div>
        <div>{selectedUser?.[0]?.email}</div>
        {userData.map((eachValue, index) => {
          console.log(eachValue);
          return (
            <div
              className='modal-container'
              onClick={() => handleNavigate(eachValue)}
              key={index}>
              <div>
                <img
                  alt='header_image'
                  src={eachValue?.profilepicture}
                  style={{ height: "30px", width: "30px", borderRadius: "25%" }}
                />
              </div>
              <div className='name_list'>{eachValue?.name}</div>
            </div>
          );
        })}
        <div>
          <button className='signout' onClick={handleSignout}>
            Sign out
          </button>
        </div>
      </Rodal>
    </div>
  );
};

export default Header;
