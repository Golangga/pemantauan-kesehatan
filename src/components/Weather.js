import React, { useState, useEffect } from "react";
import cerah from "../assets/icons/cerah.png";
import rain from "../assets/icons/rain.png";
import hujanangin from "../assets/icons/hujanAngin.png";
import hujanpertir from "../assets/icons/hujanpertir.png";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "a2a4c8e2696fdf6c786f84afa7bd5a7d";
  const city = "Semarang";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
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
  }, [API_KEY, city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const hourlyWeather = weather.list.slice(0, 4);

  const weatherIcons = {
    Clouds: cerah,
    Clear: cerah,
    Rain: rain,
    "light rain": hujanangin,
    "broken clouds": hujanpertir,
  };

  return (
    <div className="weather-container flex flex-wrap justify-center">
      <div className="flex flex-row flex-wrap justify-center w-full">
        {hourlyWeather.map((hour, index) => {
          const dateObject = new Date(hour.dt * 1000);

          const formattedDate = dateObject.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });

          const formattedTime = dateObject.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md mx-5 mb-5"
            >
              <h2 className="text-center font-bold text-lg">
                {weather.city.name}
              </h2>
              <p className="text-center text-sm text-gray-500 mb-2">
                Perkiraan cuaca pada {formattedDate}
              </p>
              <p className="text-center text-sm text-gray-500 mb-2">
                {formattedTime}
              </p>
              <p className="text-center text-sm text-gray-500 mb-2">
                Humidity: {hour.main.humidity} %
              </p>
              <div className="flex justify-center mb-4">
                <img
                  src={weatherIcons[hour.weather[0].main]}
                  alt={hour.weather[0].main}
                  className="w-16 h-16"
                />
              </div>
              <p className="text-center font-bold text-xl">
                {hour.main.temp}°C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
