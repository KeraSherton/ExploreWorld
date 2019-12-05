import React from "react";
import CountryTile from "./CountryTile.js";

const CountryList = props => {
  // console.log(props);
  return (
    <div>{props.country ? <CountryTile country={props.country} /> : null}</div>
  );
};
export default CountryList;
