import React from "react";
import { useState } from "react";
import CountryData from "./CountryContainer";

const CountryList = () => {
  const [country, setCountry] = useState("");
  return (
    <select value={CountryData.name} onChange={e => setCountry(e.target.value)}>
      {CountryData.continent.countries.map(country => (
        <option key={country.code} value={country.code} name={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
};
export default CountryList;
