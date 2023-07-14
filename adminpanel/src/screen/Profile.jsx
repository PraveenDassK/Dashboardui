import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import "../styles/Profile.css";
import PersonDetails from "../components/PersonDetails";
import CompanyDetails from "../components/CompanyDetails";
import AddressDetails from "../components/AddressDetails";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  // getting users data from context

  const userData = useContext(UserContext);

  const location = useLocation();
  //getting id from routes
  const queryParams = new URLSearchParams(location.search);
  const arrayParam = queryParams.get("id");
  console.log(arrayParam, "this array");
  //storing index in local storage if route doesn't have id

  if (arrayParam) {
    localStorage.setItem("StoredValue", arrayParam);
  }

  //getting value fromlocal storage
  const oldValue = localStorage.getItem("StoredValue");
  console.log(oldValue, "this is value");
  //filtering passed id data from use data
  const singleUserData = userData.filter((eachUser, id) =>
    !arrayParam
      ? eachUser.id === Number(oldValue)
      : eachUser.id === Number(arrayParam)
  );
  console.log(singleUserData, "this is location ");
  return (
    <PageLayout>
      <div className='container'>
        <div className='profile-left_container'>
          <PersonDetails userData={singleUserData} />
          <div className='center-container'>
            <div className='center-border' />
          </div>
          <CompanyDetails companyData={singleUserData?.[0]?.company} />
        </div>
        <div className='profile-right_container'>
          <AddressDetails addressData={singleUserData?.[0]?.address} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
