import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import UserList from "../components/UserList";
const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadData();
  });
  const loadData = async () => {
    const value = await fetch("https://panorbit.in/api/users.json");
    const userDetails = await value.json();
    setUserData(userDetails?.users);
  };
  return (
    <div style={{ position: "relative" }}>
      {/* Svg for curve background */}
      <div>
        <svg viewBox='0 0 450 200'>
          <linearGradient id='linear-gradient'>
            <stop stopColor='#3c31dd' stopOpacity='10%' />
            <stop stopColor='#3c31dd' stopOpacity='100%' />
          </linearGradient>
          <path
            d='M0, 100 C100, 200 300,
                0 500, 150 L500, 00 L0, 0 Z'
            style={{ fill: "url(#linear-gradient)" }}></path>
        </svg>
      </div>
      {/* Userlist Container */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "35%",
        }}>
        <UserList userData={userData} />
      </div>
    </div>
  );
};

export default Home;
