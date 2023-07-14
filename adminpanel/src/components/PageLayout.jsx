import React, { useEffect, useState, useContext } from "react";
import "../styles/Layout.css";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PageLayout = ({ children }) => {
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
    </div>
  );
};

export default PageLayout;
