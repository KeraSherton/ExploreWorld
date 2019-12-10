import React from "react";
import Emoji from "react-emoji-render";

const CountryTile = props => {
  console.log(props);
  const countryData = props.continentData.countries.filter(function(item) {
    return item.name.includes(props.country);
  })[0];
  return (
    <div>
      <h2 className="country-name">{props.country}</h2>

      {props.country && countryData ? (
        <ul className="list">
          <li>Native name: {countryData.native}</li>
          <li>Phone: +{countryData.phone}</li>
          <li>Currency: {countryData.currency}</li>
          <li>
            Flag: <Emoji text=":)" />
            {/* this compiler not working with flag emoji, must find other one*/}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CountryTile;

// language={country.languages.name}
// currency={country.currency}
