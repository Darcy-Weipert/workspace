import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="cityInput">
        <input
          className="city"
          type="text"
          placeholder="Search a new city"
          autocomplete="off"
          autofocus="on"
          id="searchCityInput"
        />
        <input className="city" type="submit" value="Search" />
        <button className="city">Current Location</button>
      </form>
    </div>
  );
}
