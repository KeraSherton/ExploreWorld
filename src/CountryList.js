import React from "react";
// import CountryTile from "./CountryTile.js";

const CountryList = props => {
  console.log(props);
  return (
    <div>
      <h2 className="country-name">{props.country}</h2>
      {/* <ul className="list">
        <li>Native name: {props.country.native}</li>
        <li>Phone: +{props.country.phone}</li>
        <li>Currency: {props.country.currency}</li>
      </ul> */}
    </div>
  );
};
export default CountryList;
