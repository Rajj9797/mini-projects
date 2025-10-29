import React from "react";
import WeatherCard from "./Weathercard";
import './App.css';
const WeatherApp = ({ city, loading, weatherData }) => {
  const current = weatherData?.current;

  if (loading) {
    return (
      <div className="weather-display">
        <p>Loading data...</p>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="weather-display">
        <p>{city ? "No data available for that city." : "Search for a city to see weather."}</p>
      </div>
    );
  }

  return (
    <div className="weather-display">
      <div className="weather-cards">
        <WeatherCard title="Temperature" data={`${current.temp_c ?? "-"}°C`} />
        <WeatherCard title="Humidity" data={`${current.humidity ?? "-"}%`} />
        <WeatherCard title="Condition" data={current.condition?.text ?? "-"} />
        <WeatherCard title="Wind Speed" data={`${current.wind_kph ?? "-"} kph`} />
      </div>
    </div>
  );
};

export default WeatherApp;