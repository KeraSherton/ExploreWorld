import React from "react";
import { useState } from "react";
import "./App.css";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import wrld from "./images/Download-World-PNG-Free-Download.png";
import CountryTile from "./components/CountryTile";
import ContinentsQuery from "./components/ContinentsQuery";

const { Suspense } = React;

const preloadedQuery = preloadQuery(RelayEnvironment, ContinentsQuery);

function App(props) {
  const data = usePreloadedQuery(ContinentsQuery, props.preloadedQuery, {});
  console.log(data);

  const [country, setCountry] = useState("");
  const [ContinentCode, setCode] = useState("");
  const [userContinent, setUserContinent] = useState("World");

  const handleClick = () => {
    if (userContinent === "World") {
      setUserContinent("Europe");
      setCode("EU");
    } else if (userContinent === "Europe") {
      setUserContinent("Asia");
      setCode("AS");
    } else if (userContinent === "Asia") {
      setUserContinent("Africa");
      setCode("AF");
    } else if (userContinent === "Africa") {
      setUserContinent("North America");
      setCode("NA");
    } else if (userContinent === "North America") {
      setUserContinent("South America");
      setCode("SA");
    } else if (userContinent === "South America") {
      setUserContinent("Oceania");
      setCode("OC");
    } else if (userContinent === "Oceania") {
      setUserContinent("Europe");
      setCode("EU");
    }
  };
  const continents = data.continents;
  const continentData = continents.find(item => {
    return item.code.includes(ContinentCode);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Explore
          <div onClick={handleClick} className="continent">
            {userContinent}
          </div>
        </h1>
        <input
          type="image"
          src={wrld}
          className="button"
          alt="Go"
          onClick={handleClick}
          title="Click me!"
        />
      </header>
      <div className="country-div">
        {userContinent === "World" ? null : (
          <select
            className="input"
            value={country}
            onChange={e => setCountry(e.target.value)}
          >
            {continentData.countries.map(country => (
              <option className="option" key={country.code} name={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        )}
      </div>
      {userContinent !== "World" ? (
        <CountryTile country={country} continentData={continentData} />
      ) : null}
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
