import React from "react";

const CompanyDetails = ({ companyData }) => {
  console.log(companyData, "this is data");
  const userDetailsData = [
    {
      title: "Name",
      value: companyData?.name,
    },
    {
      title: "catchpharse",
      value: companyData?.catchPhrase,
    },
    {
      title: "bs",
      value: companyData?.bs,
    },
  ];
  return (
    <div>
      <div style={{ textAlign: "center" }} className='address-header'>
        Company
      </div>
      {userDetailsData.map((eachValue, index) => {
        return (
          <div className='name-details' key={index}>
            <div className='details-title'>{`${eachValue.title}`} </div>
            <div> : </div>
            <div className='details-value'> {`${eachValue.value}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyDetails;
