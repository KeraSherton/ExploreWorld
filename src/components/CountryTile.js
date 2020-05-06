import React from "react";
import ReactCountryFlag from "react-country-flag";


const CountryTile = props => {
  console.log(props);
  const countryData = props.continentData.countries.find(item => {
    return item.name.includes(props.country);
  });

  return (
    <>
      {props.country && countryData ? (
        <div>
          <p className="country-name">{countryData.name}</p>
          <ul className="list">
            <li>Native name: {countryData.native}</li>
            <li>
            Languages:
              {countryData.languages.map(language => (
                <span key={language.name}> {language.name} </span>
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
        </div>
      ) : null}
    </>
  );
};

export default CountryTile;
