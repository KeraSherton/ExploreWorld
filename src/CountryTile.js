import React from "react";
import ReactCountryFlag from "react-country-flag";
import ExampleFragment from "./ExampleFragment.js";
// import Languages from "./Languages";

const CountryTile = props => {
  const countryData = props.continentData.countries.find(item => {
    return item.name.includes(props.country);
  });

  return (
    <div>
      <h3 className="country-name">{props.country}</h3>
      {props.country && countryData ? (
        <ul className="list">
          <li>Native name: {countryData.native}</li>
          <li>
            {/* <Languages code={countryData.code} /> */}
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
      <ExampleFragment continent={props.continentData.code} />
    </div>
  );
};

export default CountryTile;
