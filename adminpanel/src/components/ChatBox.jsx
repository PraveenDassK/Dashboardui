import React from "react";
import { BiMessage } from "react-icons/bi";
import { PiCaretUpBold } from "react-icons/pi";
import { AiOutlineDown } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
const ChatBox = ({ handleMinimize, handleChatClose, chatBoxData }) => {
  //data for send and receive message
  const messageData = [
    {
      receive: "Lorem ipsum dolor sit amet,",
    },
    {
      receive: "Lorem ipsum dolor sit amet,",
    },
    {
      sent: "dolor sit amet,",
      time: "9.00 am",
    },
    {
      receive: "Lorem ipsum dolo,",
    },
    {
      sent: "Lorem ipsum ,",
    },
  ];
  return (
    <div>
      <div className='chat-list_hiddencontainer'>
        <div className='chatname-text'>
          <img
            alt='header_image'
            src={chatBoxData?.profilepicture}
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "10px",
            }}
          />{" "}
          <span style={{ fontSize: "12px" }}>{chatBoxData?.name}</span>
        </div>
        <div
          style={{
            marginRight: "8px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
          }}>
          <AiOutlineDown onClick={handleMinimize} />
          <div onClick={handleChatClose} style={{ cursor: "pointer" }}>
            X
          </div>
        </div>
      </div>
      <div className='chat-body'>
        <ChatBody messageData={messageData} />
      </div>
      <div style={{ background: "white" }}>
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatBox;

const ChatBody = ({ messageData }) => {
  return (
    <div>
      {messageData?.map((eachMessage, index) => {
        return (
          <div key={index}>
            {eachMessage?.time ? (
              <div className='time-style'>{eachMessage?.time} </div>
            ) : null}
            <div
              style={{
                justifyContent: `${
                  eachMessage?.sent ? "flex-end" : "flex-start"
                }  `,
                alignItems: `${eachMessage?.sent ? "end" : "start"}  `,
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
              {eachMessage?.receive ? (
                <div className='received'>{eachMessage?.receive}</div>
              ) : null}

              {eachMessage?.sent ? (
                <div className='received'>{eachMessage?.sent}</div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ChatFooter = () => {
  return (
    <div className='bottom-input'>
      <input
        placeholder='type a message'
        style={{
          outline: "none",
          border: "none",
          width: "100%",
          height: "100%",
        }}
      />
      <IoMdSend color='blue' size={20} />
    </div>
  );
};
