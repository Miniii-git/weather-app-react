import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let apiKey = "t734d4903fba534f1644oba02ab79462";

  function hndleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  }

  function updateCityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={hndleSubmit}>
        <input
          type="sesrch"
          placeholder="Enter a City ..."
          onChange={updateCityName}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
