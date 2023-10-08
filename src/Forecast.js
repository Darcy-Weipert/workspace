import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecastBox">
        <div className="day">
          <h4>Wed</h4>

          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            72° <strong>92°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Thu</h4>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            71° <strong>93°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Fri</h4>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            73° <strong>94°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Sat</h4>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            71° <strong>93°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Sun</h4>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            70° <strong>92°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Mon</h4>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="yellow"
            size={25}
            animate={true}
          />
          <p>
            70° <strong>93°</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
