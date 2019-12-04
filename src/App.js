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

const { Suspense } = React;
// Define a query
const ContinentQuery = graphql`
  query AppQuery {
    continent(code: "EU") {
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
      }
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, ContinentQuery, {});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(ContinentQuery, props.preloadedQuery, {});
  console.log(data);

  const exampleCountry = {
    name: "Poland",
    native: "Polska",
    phone: "48",
    currency: "PLN"
  };
  const [country, setCountry] = useState(exampleCountry.name);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Explore <txt className="continent">{data.continent.name}</txt>
        </h1>
      </header>
      <div className="country-div">
        <select value={country} onChange={e => setCountry(e.target.value)}>
          {data.continent.countries.map(country => (
            <option key={country.code} name={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <CountryList country={country} />
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
