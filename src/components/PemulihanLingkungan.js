import React from "react";

function PemulihanLingkungan() {
  return (
    <div className="bg-warnabiru min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white py-4">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Pemulihan Lingkungan
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">
              Langkah-langkah Pemulihan Lingkungan Pasca Bencana Alam
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Penilaian Dampak Bencana:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Melakukan evaluasi awal terhadap kerusakan yang terjadi.
                  </li>
                  <li>
                    Mengidentifikasi area yang paling terdampak dan menentukan
                    prioritas pemulihan.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Pembersihan dan Pengelolaan Limbah:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Membersihkan puing-puing dan sampah yang dihasilkan oleh
                    bencana.
                  </li>
                  <li>
                    Mengelola limbah dengan cara yang ramah lingkungan, seperti
                    mendaur ulang material yang masih dapat digunakan.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Restorasi Vegetasi:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Menanam kembali pohon dan vegetasi yang hancur untuk
                    mencegah erosi tanah dan memperbaiki habitat satwa liar.
                  </li>
                  <li>
                    Menggunakan tanaman lokal yang adaptif terhadap kondisi
                    lingkungan setempat.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">Pengelolaan Air:</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Memperbaiki dan membersihkan sumber air yang tercemar.
                  </li>
                  <li>
                    Membuat sistem pengelolaan air yang lebih baik untuk
                    menghindari banjir dan kekeringan di masa mendatang.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Rehabilitasi Habitat:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Membangun kembali habitat alami yang rusak seperti terumbu
                    karang, hutan bakau, dan padang rumput.
                  </li>
                  <li>
                    Mengurangi tekanan pada ekosistem dengan mengatur aktivitas
                    manusia di area tersebut.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Pendidikan dan Kesadaran Masyarakat:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Mengedukasi masyarakat tentang pentingnya menjaga lingkungan
                    dan cara-cara pemulihan yang efektif.
                  </li>
                  <li>
                    Melibatkan masyarakat dalam proses pemulihan untuk
                    meningkatkan rasa tanggung jawab dan kepemilikan.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Pengembangan Infrastruktur Tahan Bencana:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Membangun infrastruktur yang lebih tahan terhadap bencana di
                    masa depan.
                  </li>
                  <li>
                    Menggunakan bahan bangunan yang ramah lingkungan dan desain
                    yang adaptif terhadap kondisi alam.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Kolaborasi dan Koordinasi:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Berkoordinasi dengan berbagai pihak seperti pemerintah, LSM,
                    dan komunitas lokal untuk memastikan pemulihan yang
                    terintegrasi.
                  </li>
                  <li>
                    Mencari dukungan finansial dan teknis dari organisasi
                    internasional jika diperlukan.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">
                  Pemantauan dan Evaluasi:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Melakukan pemantauan berkala terhadap progres pemulihan.
                  </li>
                  <li>
                    Mengevaluasi efektivitas langkah-langkah yang telah diambil
                    dan melakukan penyesuaian jika diperlukan.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mt-4">
              Dengan melakukan langkah-langkah tersebut, diharapkan lingkungan
              dapat pulih dan berfungsi kembali secara optimal, serta lebih siap
              menghadapi bencana di masa mendatang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PemulihanLingkungan;
