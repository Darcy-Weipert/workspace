import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";

export default function Current() {
  return (
    <div className="Current-temp">
      <div className="boxes">
        <div className="box">
          <h2>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="black"
              size={30}
              animate={true}
            />{" "}
            90°F{" "}
          </h2>
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
