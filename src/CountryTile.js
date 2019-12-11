import React from "react";
import ReactCountryFlag from "react-country-flag";

const CountryTile = props => {
  const countryData = props.continentData.countries.filter(function(item) {
    return item.name.includes(props.country);
  })[0];

  return (
    <div>
      <h2 className="country-name">{props.country}</h2>

      {props.country && countryData ? (
        <ul className="list">
          <li>Native name: {countryData.native}</li>
          <li>
            Language:
            {countryData.languages.map(language => (
              <> {language.name}</>
            ))}
          </li>
          <li>Currency: {countryData.currency}</li>
          <li>
            Flag :{" "}
            {countryData ? (
              <ReactCountryFlag code={countryData.code} svg />
            ) : null}
          </li>
          <li>Phone: +{countryData.phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default CountryTile;
