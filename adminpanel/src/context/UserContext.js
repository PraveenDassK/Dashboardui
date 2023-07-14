import React, { createContext, useState, useEffect } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create a UserContextProvider component
export const UserContextProvider = ({ children }) => {
  // State to store user data
  const [userData, setUserData] = useState([]);
  console.log("jajajajja");
  // Fetch user data from API
  useEffect(() => {
    // Call the fetchUserData function
    fetchUserData();
  }, []);

  // Function to fetch user data from API

  const fetchUserData = async () => {
    const response = await fetch("https://panorbit.in/api/users.json");
    console.log(response, "this is res");
    const data = await response.json();
    console.log(data, "this is data api call");
    setUserData(data?.users);
  };
  console.log("helllll", userData);
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};
