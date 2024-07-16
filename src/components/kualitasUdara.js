import React, { useState, useEffect } from "react";
import blue from "../assets/vid/blue.mp4";
import yellow from "../assets/vid/yellow.mp4";
//import green from "../assets/vid/green.mp4";

const AirPollution = () => {
  const [pollution, setPollution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your aqicn API key
  const API_KEY = "YOUR_AQICN_API_KEY";

  // Replace with your latitude and longitude (Semarang example)
  const latitude = -6.992778;
  const longitude = 110.417496;

  useEffect(() => {
    const fetchPollution = async () => {
      try {
        const response = await fetch(
          `https://api.waqi.info/feed/here/?token=${API_KEY}&lat=${latitude}&lon=${longitude}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPollution(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPollution();
  }, [API_KEY, latitude, longitude]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Data access might differ depending on aqicn API response structure
  // Refer to their documentation for details
  const currentPollution = pollution.data || {}; // Handle potential missing data

  return (
    <div className="bg-white h-auto flex justify-center">
      <div className="font-bold flex-row">
        <h2>Air Pollution</h2>
      </div>
      <div className="font-normal">
        <p>
          PM10:{" "}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-full"
          >
            <source src={blue} type="video/mp4" />
          </video>
          {currentPollution.pm10} µg/m³
        </p>

        <p>
          PM2.5:{" "}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-full"
          >
            <source src={yellow} type="video/mp4" />
          </video>
          {currentPollution.pm25} µg/m³
        </p>
      </div>
    </div>
  );
};

export default AirPollution;
