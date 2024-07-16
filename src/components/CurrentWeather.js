import React, { useState, useEffect } from "react";

const CuacaHariIni = () => {
  const [cuacaHariIni, setCuacaHariIni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "28b7d4bb96c484fc420b811fb8c7667c09003e75";
  const city = "Semarang";

  useEffect(() => {
    const fetchCuacaHariIni = async () => {
      try {
        const response = await fetch(
          `https://api.waqi.info/feed/${city}/?token=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCuacaHariIni(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCuacaHariIni();
  }, [API_KEY, city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { data } = cuacaHariIni;

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Cuaca Hari Ini di {data.city.name}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-700">
          Temperature: {data.iaqi.t ? data.iaqi.t.v : "-"}°C
        </p>
      </div>
    </div>
  );
};

export default CuacaHariIni;
