import React from "react";
import graphql from "babel-plugin-relay/macro";
import RelayEnvironment from "../RelayEnvironment";
import { QueryRenderer } from "react-relay";

const ExampleFragment = props => {
  const renderQuery = ({ props }) => {
    if (props) {
      return <div className="example">{props.continent.name} is great!</div>;
    }
    return <div>Loading</div>;
  };
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
    query ExampleFragmentQuery($code: String) {
        continent(code: $code) {
                name
            }
                }
  `}
      variables={{
        code: `${props.continent}`
      }}
      render={renderQuery}
    />
  );
};

export default ExampleFragment;
