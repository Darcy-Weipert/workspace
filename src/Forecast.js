import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="forecastBox">
        <div className="day">
          <h4>Wed</h4>
          <p>☀</p>
          <p>
            72° <strong>92°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Thu</h4>
          <p>☀</p>
          <p>
            71° <strong>93°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Fri</h4>
          <p>☀</p>
          <p>
            73° <strong>94°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Sat</h4>
          <p>☀</p>
          <p>
            71° <strong>93°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Sun</h4>
          <p>☀</p>
          <p>
            70° <strong>92°</strong>
          </p>
        </div>
        <div className="day">
          <h4>Mon</h4>
          <p>☀</p>
          <p>
            70° <strong>93°</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
