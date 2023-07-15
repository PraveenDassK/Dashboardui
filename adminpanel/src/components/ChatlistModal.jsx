import React, { useState, useEffect } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "../styles/Chatlist.css";
import { BiMessage } from "react-icons/bi";
import { PiCaretUpBold } from "react-icons/pi";
const ChatlistModal = ({ userData, handleChatBox }) => {
  const [isModalVisible, setModalVisible] = useState(true);
  //custom styleformodal
  const customStyles = {
    bottom: "00%",
    left: "65%",
    borderRadius: "5%",
    width: "18%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "column",
    overflow: "auto",
    height: "55%",
  };
  return (
    <div className='modal_container'>
      {userData?.map((eachValue, index) => {
        return (
          <div className='eachperson' onClick={() => handleChatBox(eachValue)}>
            <div className='name-container'>
              <span>
                <img
                  alt='header_image'
                  src={eachValue?.profilepicture}
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "15px",
                  }}
                />
              </span>
              <span style={{ fontSize: "14px" }}>{eachValue?.name}</span>
            </div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "5px",
                background: `${index % 3 ? "green" : "gray"}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatlistModal;
