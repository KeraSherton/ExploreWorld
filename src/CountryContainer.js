import RelayEnvironment from "./RelayEnvironment";
import { preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import ChoosenCode from "./App";

const UserContinentQuery = graphql`
  query CountryContainerQuery {
    continent {
      code
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

function CountryDataFetch() {
  console.log(ChoosenCode);
  usePreloadedQuery(
    UserContinentQuery,
    preloadQuery(RelayEnvironment, UserContinentQuery, {
      code: ChoosenCode
    })
  );
}

export default CountryDataFetch;
