import React from "react";
import { useState } from "react";
import "./App.css";

import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import RelayEnvironment from "./RelayEnvironment";
// import CountryTile from "./CountryList";

import wrld from "./images/Download-World-PNG-Free-Download.png";
import CountryDataFetch from "./CountryContainer";

const { Suspense } = React;
// Define a query
const ContinentQuery = graphql`
  query AppQuery {
    continents {
      name
      countries {
        name
      }
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, ContinentQuery);

function App(props) {
  const data = usePreloadedQuery(ContinentQuery, props.preloadedQuery, {});
  console.log(data);

  // const exampleCountry = {
  //   name: "Poland",
  //   native: "Polska",
  //   phone: "48",
  //   currency: "PLN"
  // };

  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [userContinent, setUserContinent] = useState("World");
  const [CountryData, setCountryData] = useState("");

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

  // const checkContinent = () => {
  //   return data.continents.name === continent;
  // };
  // const message = "Click me!";
  //  const filterData(continent) {
  //     data.filter(continents.name === continent);
  //     };
  //   }

  // function checkName(name) {
  //   return name === continent;
  // }

  // const countryData = data.continents.map((continent, code)=> <country key={code} name={data.continent.countries.name}/> );
  // data.continents.filter((continent, code) => (
  //   <chContinent key={code} name={data.continent.name} />
  // ));
  // () => {
  //     if (continent !== "World") {
  const handleFilter = () => {
    let data = CountryDataFetch();
    setCountryData(data);
  };

  // setFilteredData(countryData);
  // console.log("ok");
  // } else return alert("First click World!");
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Explore
          <div
            // onMouseOver={message}
            onClick={handleClick}
            className="continent"
          >
            {userContinent}
          </div>
        </h1>
        {/* button will load countries fron continent */}
        <input
          type="image"
          src={wrld}
          className="button"
          onClick={handleFilter}
          alt="Go"
        />
      </header>
      <div className="country-div">
        {userContinent === "World"
          ? null
          : // (
            //   <select
            //     value={CountryData.name}
            //     onChange={e => setCountry(e.target.value)}
            //   >
            //     {CountryData.map(country => (
            //       <option
            //         key={country.code}
            //         value={country.name}
            //         name={country.name}
            //       >
            //         {country.name}
            //       </option>
            //     ))}
            //   </select>
            // )
            console.log(CountryData)}
      </div>
      <h2> {country} </h2>
      {/* <CountryTile country={country} /> */}
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
