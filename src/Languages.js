import React from "react";
import graphql from "babel-plugin-relay/macro";
import RelayEnvironment from "./RelayEnvironment";
import { QueryRenderer } from "react-relay";

const ExampleFragment = props => {
  console.log(props);
  const renderQuery = ({ props }) => {
    if (props) {
      console.log(props);
      return (
        <div>
          {props.country.languages.length > 1 ? (
            <div>
              Languages:
              {props.country.languages.map(language => (
                <> {language.name},</>
              ))}
            </div>
          ) : (
            <div>
              Language:
              {props.country.languages.map(language => (
                <> {language.name}</>
              ))}
            </div>
          )}
        </div>
      );
    }
    return <div>Loading</div>;
  };
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
    query LanguagesQuery($code: String) {
        country(code: $code) {
                languages{
                    name
                        }
                            }
                                                }
            `}
      variables={{
        code: `${props.code}`
      }}
      render={renderQuery}
    />
  );
};

export default ExampleFragment;
