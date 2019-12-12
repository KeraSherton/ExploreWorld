import graphql from "babel-plugin-relay/macro";

const ContinentsQuery = graphql`
  query ContinentsQuery {
      continents {
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
          emoji
        }
      }
    }
  `;

export default ContinentsQuery;
