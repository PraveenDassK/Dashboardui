import React, { useEffect, useState, useContext } from "react";
import "../styles/Layout.css";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BiMessage } from "react-icons/bi";
import { PiCaretUpBold } from "react-icons/pi";
import { AiOutlineDown } from "react-icons/ai";
import ChatlistModal from "./ChatlistModal";
import ChatBox from "./ChatBox";
const PageLayout = ({ children }) => {
  //state for chatlist modal visble
  const [chatModal, setChatModal] = useState(false);
  //state to pass data from chatlist to chatbox
  const [chatBoxData, setChatBoxData] = useState([]);
  const [chatBoxVisible, setChatBoxVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // getting users data from context
  const userData = useContext(UserContext);
  //getting id from routes
  const queryParams = new URLSearchParams(location.search);
  const arrayParam = queryParams.get("id");
  //getting value fromlocal storage
  const oldValue = localStorage.getItem("StoredValue");
  console.log(oldValue, "this is value");
  //filtering passed id data from use data
  const singleUserData = userData.filter((eachUser, id) =>
    !arrayParam
      ? eachUser.id === Number(oldValue)
      : eachUser.id === Number(arrayParam)
  );

  //sidebar data with navigation function
  const sidebarData = [
    {
      name: "Profile",
      navigate: () => navigate("/Profile"),
    },
    {
      name: "Posts",
      navigate: () => navigate("/Posts"),
    },
    {
      name: "Gallery",
      navigate: () => navigate("/Gallery"),
    },
    {
      name: "Todo",
      navigate: () => navigate("/Todo"),
    },
  ];

  //chat list modalclose handlefunction

  const handleChatlist = () => {
    if (!chatModal) {
      setChatModal(true);
    } else {
      setChatModal(false);
      setChatBoxVisible(false);
    }
  };
  //function to pass value and visble chatbox

  const handleChatBox = (value) => {
    setChatBoxData(value);
    setChatBoxVisible(true);
  };

  //function to minimize  chatlist and close  chatbox

  const handleMinimize = () => {
    setChatBoxVisible(false);
    setChatModal(false);
  };

  // function to close chatbox

  const handleChatClose = () => {
    setChatBoxVisible(false);
  };

  return (
    <div className='layout-container'>
      {/* used row-reverse in css */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header
          name={location.pathname}
          userData={userData}
          selectedUser={singleUserData}
        />
        <div>{children}</div>
      </div>
      <div className='sidebar'>
        <div className='sidebar-container'>
          {sidebarData.map((eachValue, index) => {
            return (
              <>
                <div
                  className='sidebar-title'
                  onClick={eachValue?.navigate}
                  key={index}>
                  {eachValue?.name}
                  <div>
                    {location.pathname.includes(`/${eachValue?.name}`) ? (
                      <div className='right-arrow'>
                        <div className='arrow-button'>{">"}</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* Bottom chat list container */}
      <div className='chatlist-container'>
        <div className='chat-list_hiddencontainer'>
          <div className='chatname-text' onClick={handleChatlist}>
            <BiMessage />
            <span>Chats</span>
          </div>
          <div
            style={{ marginRight: "8px", cursor: "pointer" }}
            onClick={handleChatlist}>
            {chatModal ? <AiOutlineDown /> : <PiCaretUpBold />}
          </div>
        </div>
        {chatModal ? (
          <ChatlistModal userData={userData} handleChatBox={handleChatBox} />
        ) : null}
      </div>
      {/* Bottom chat box container */}
      {chatBoxVisible ? (
        <div className='chatbox-container'>
          <ChatBox
            chatBoxData={chatBoxData}
            handleMinimize={handleMinimize}
            handleChatClose={handleChatClose}
          />
        </div>
      ) : null}
    </div>
  );
};

export default PageLayout;
