import React from "react";

const CountryTile = props => {
  console.log(props);
  return (
    <>
      <h2 className="country-name">{props.country}</h2>
      <ul className="list">
        {/* <li>Native name: {props.country.native}</li>
        <li>Phone: +{props.country.phone}</li>
        <li>Currency: {props.country.currency}</li>
        <li>Flag: {props.country.emoji} </li> */}
      </ul>
    </>
  );
};

export default CountryTile;

// key={country.code}
// value={country.code}
// name={country.name}
// native={country.native}
// phone={country.phone}
// language={country.languages.name}
// currency={country.currency}
