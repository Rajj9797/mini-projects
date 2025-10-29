import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherApp';
import SearchBar from './SearchBar';
import axios from 'axios';
import './App.css';
function App() {
 const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [city, setCity] = useState(""); 
  
  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "5d2711d82901495084b191051252810",
            q: city
          }
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          alert("Failed to fetch weather data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [city]);


  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} loading={loading} weatherData={weatherData} />
    </div>
  );
}

export default App;
