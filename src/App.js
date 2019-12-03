import React from "react";
import "./App.css";
import fetchGraphQL from "./fetchGraphQL";
import graphql from "babel-plugin-relay/macro";

const { useState, useEffect } = React;

function App() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      
    `)
      .then(response => {
        // Avoid updating state if the component unmounted before the fetch completes
        if (!isMounted) {
          return;
        }
        const data = response.data;
        setName(data.continent.name);
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header">
        <p>{name != null ? ` ${continent.name}` : "Loading"}</p>
      </header>
    </div>
  );
}

export default App;
