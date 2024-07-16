import React, { useState, useEffect } from "react";

const Pollution = () => {
  const [pollution, setPollution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "28b7d4bb96c484fc420b811fb8c7667c09003e75";
  const city = "Semarang"; // Sesuaikan dengan nama kota yang diinginkan

  useEffect(() => {
    const fetchPollution = async () => {
      try {
        const response = await fetch(
          `https://api.waqi.info/feed/${city}/?token=${API_KEY}`
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
  }, [API_KEY, city]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8">Error: {error.message}</div>;

  if (!pollution || !pollution.data) return null;

  const { data } = pollution;

  return (
    <div className="pollution-container mx-auto max-w-md mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        Pollution in {data.city.name}
      </h2>
      <table className="pollution-table w-full">
        <tbody>
          <tr className="border-b">
            <td className="py-2">AQI (Air Quality Index)</td>
            <td className="py-2">{data.aqi}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">PM2.5</td>
            <td className="py-2">{data.iaqi.pm25 ? data.iaqi.pm25.v : "-"}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">PM10</td>
            <td className="py-2">{data.iaqi.pm10 ? data.iaqi.pm10.v : "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pollution;
