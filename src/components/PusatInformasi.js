import React, { useState, useEffect } from "react";

const PusatInformasi = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Contoh data artikel
    const dummyArticles = [
      { id: 1, title: "Cara Menjaga Kualitas Udara di Rumah", content: "..." },
      { id: 2, title: "Tips Mengurangi Polusi Udara di Kota", content: "..." },
      {
        id: 3,
        title: "Dampak Polusi Udara Terhadap Kesehatan",
        content: "...",
      },
    ];
    setTimeout(() => {
      setArticles(dummyArticles);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8">Error: {error.message}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Artikel dan Informasi</h2>
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PusatInformasi;
