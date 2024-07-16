import React, { useState, useEffect } from "react";
import blueVideo from "../assets/vid/blue.mp4";
import yellowVideo from "../assets/vid/yellow.mp4";

const AirPollution = () => {
  const [pollution, setPollution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "28b7d4bb96c484fc420b811fb8c7667c09003e75";
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

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8">Error: {error.message}</div>;

  const currentPollution = pollution.data || {};

  return (
    <div className="bg-warnabiru py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Air Quality</h2>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex flex-col items-center">
            <video
              autoPlay
              loop
              muted
              className="w-24 h-24 rounded-full object-cover"
            >
              <source src={blueVideo} type="video/mp4" />
            </video>
            <p className="mt-2 text-center">
              PM10: {currentPollution.pm10 ? currentPollution.pm10.v : "-"}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <video
              autoPlay
              loop
              muted
              className="w-24 h-24 rounded-full object-cover"
            >
              <source src={yellowVideo} type="video/mp4" />
            </video>
            <p className="mt-2 text-center">
              PM2.5: {currentPollution.pm25 ? currentPollution.pm25.v : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirPollution;
