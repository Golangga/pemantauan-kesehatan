import React, { useState, useEffect } from "react";
//import { TomorrowioSDK } from "@tomorrow.io/weather-js-sdk";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "n4eNnJHUzET9XUj1zflwvJ5gtoRciZ8J";
  const location = "Semarang"; // You can use coordinates as well

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature&apikey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY, location]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const currentWeather = weather.data.timelines[0].intervals[0].values;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {currentWeather.temperature}°C</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default CurrentWeather;
