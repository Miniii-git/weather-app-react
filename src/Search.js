import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let apiKey = "t734d4903fba534f1644oba02ab79462";

  function showWeather(response) {
    setWeather(response.data);
  }

  function hndleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
    console.log(weather);
  }

  function updateCityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={hndleSubmit}>
      <input
        type="sesrch"
        placeholder="Enter a City ..."
        onChange={updateCityName}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (weather) {
    return (
      <div className="Search">
        {form}
        <div className="weather-information">
          <h2>{weather.city}</h2>
          <h4>{weather.condition.description}</h4>
          <h4>
            Temperature: {Math.round(weather.temperature.current)}°
            <small>C</small>
          </h4>
          <h4>humidity: {weather.temperature.humidity}%</h4>
          <h4>
            Wind Speed: {weather.wind.speed} <small>km/h</small>
          </h4>
          <img
            src={weather.condition.icon_url}
            alt={weather.condition.description}
          />
        </div>
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
