import React from "react";
import ReactCountryFlag from "react-country-flag";
import ExampleFragment from "./ExampleFragment.js";
import Languages from "./Languages";

const CountryTile = props => {
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
              <Languages code={countryData.code} />
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

          <ExampleFragment continent={props.continentData.code} />
        </div>
      ) : null}
    </>
  );
};

export default CountryTile;
