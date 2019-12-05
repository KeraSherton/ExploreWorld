import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import CountryList from "./CountryList";
import { useState } from "react";
import wrld from "./images/Download-World-PNG-Free-Download.png";

const { Suspense } = React;
// Define a query
const ContinentQuery = graphql`
  query AppQuery {
    continents {
      name
      countries {
        code
        name
        native
        phone
        languages {
          name
        }
        currency
        emoji
      }
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, ContinentQuery, {});

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
  const [continent, setContinent] = useState("World");
  const [filteredData, setFilteredData] = useState("");
  const checkContinent = () => {
    return data.continents.continent.name === continent;
  };
  const message = "Click me!";
  const handleClick = () => {
    if (continent === "World") {
      setContinent("Europe");
    } else if (continent === "Europe") {
      setContinent("Asia");
    } else if (continent === "Asia") {
      setContinent("Africa");
    } else if (continent === "Africa") {
      setContinent("North America");
    } else if (continent === "North America") {
      setContinent("South America");
    } else if (continent === "South America") {
      setContinent("Oceania");
    } else if (continent === "Oceania") {
      setContinent("Europe");
    }
  };
  const handleFilter = () => {
    if (continent !== "World") {
      setFilteredData(data.filter(checkContinent));
    } else return alert("Click World!");
  };

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
            {continent}
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
        {continent === "World" ? null : (
          <select value={country} onChange={e => setCountry(e.target.value)}>
            {filteredData.continents.continent.countries.map(country => (
              <option key={country.code} name={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        )}

        <CountryList country={country} data={data} />
      </div>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
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
