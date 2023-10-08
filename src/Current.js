import React from "react";
import "./styles.css";

export default function Current() {
  return (
    <div className="Current-temp">
      <div className="boxes">
        <div className="box">
          <h2>⛅ 90°F </h2>
        </div>
        <div className="box">
          <h3>Partly Cloudy</h3>
          <p>Humidity: 47%</p>
          <p>Wind: 6 MPH</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
