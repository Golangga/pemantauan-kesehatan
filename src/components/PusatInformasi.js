import React, { useState, useEffect } from "react";

const PusatInformasi = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    // Dummy data
    const dummyData = {
      safetyInstructions: [
        {
          type: "Gempa Bumi",
          instructions: [
            "Segera berlindung di bawah meja atau furnitur yang kuat.",
            "Jauhi jendela, kaca, dan benda-benda yang mudah jatuh.",
            "Setelah guncangan berhenti, segera keluar dari bangunan dengan hati-hati.",
            "Pilih rute evakuasi yang aman dan ikuti petunjuk dari petugas.",
          ],
        },
        {
          type: "Banjir",
          instructions: [
            "Pindahkan barang-barang berharga ke tempat yang lebih tinggi.",
            "Matikan aliran listrik untuk menghindari korsleting.",
            "Segera evakuasi ke tempat yang lebih tinggi atau titik evakuasi yang telah ditentukan.",
            "Jangan berjalan atau mengemudi melalui air banjir yang deras.",
          ],
        },
        {
          type: "Kebakaran Hutan",
          instructions: [
            "Segera evakuasi dari area yang terkena dampak kebakaran.",
            "Tutup semua ventilasi, jendela, dan pintu untuk mengurangi masuknya asap.",
            "Gunakan masker atau kain basah untuk menutup hidung dan mulut.",
            "Ikuti rute evakuasi yang telah ditentukan oleh petugas.",
          ],
        },
      ],
      emergencyContacts: [
        { name: "Pusat Bantuan", number: "123-456-7890" },
        { name: "Ambulans", number: "112" },
        { name: "Polisi", number: "110" },
        { name: "Pemadam Kebakaran", number: "113" },
      ],
      evacuationPoints: [
        { name: "Sekolah ABC", address: "Jalan Merdeka No. 123" },
        { name: "Gedung Serbaguna XYZ", address: "Jalan Pancasila No. 456" },
        {
          name: "Lapangan Sepak Bola DEF",
          address: "Jalan Proklamasi No. 789",
        },
      ],
      articles: [
        {
          id: 1,
          title: "Cara Menjaga Kualitas Udara di Rumah",
          content: "...",
        },
        {
          id: 2,
          title: "Tips Mengurangi Polusi Udara di Kota",
          content: "...",
        },
        {
          id: 3,
          title: "Dampak Polusi Udara Terhadap Kesehatan",
          content: "...",
        },
      ],
    };

    setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8">Error: {error.message}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Pusat Informasi</h1>
      <h2 className="text-xl font-bold mb-2">
        Petunjuk Keselamatan dan Evakuasi
      </h2>
      <p className="mb-4">
        Berikut adalah petunjuk keselamatan dan evakuasi untuk berbagai jenis
        bencana:
      </p>
      {data.safetyInstructions.map((instruction) => (
        <div key={instruction.type}>
          <h3 className="text-lg font-semibold mb-2">{instruction.type}:</h3>
          <ul className="list-disc list-inside mb-4 ml-4">
            {instruction.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2 className="text-xl font-bold mb-2">Nomor Kontak Darurat</h2>
      <ul className="list-disc list-inside mb-4 ml-4">
        {data.emergencyContacts.map((contact) => (
          <li key={contact.name}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-2">
        Titik Evakuasi dan Pusat Penampungan Sementara
      </h2>
      <ul className="list-disc list-inside mb-4 ml-4">
        {data.evacuationPoints.map((point) => (
          <li key={point.name}>
            {point.name}: {point.address}
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold mb-4">Artikel dan Informasi</h2>
      <div className="grid grid-cols-1 gap-4">
        {data.articles.map((article) => (
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
