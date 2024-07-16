import React from "react";

function PemulihanLingkungan() {
  return (
    <div>
      {/* Konten Utama */}
      <main className="flex-grow bg-warnabiru p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Pemulihan Lingkungan</h1>
          <p className="mb-4">
            Pemulihan lingkungan pasca bencana alam merupakan proses penting
            untuk mengembalikan kondisi ekosistem yang terganggu. Berikut adalah
            beberapa langkah yang dapat diambil untuk pemulihan lingkungan
            setelah bencana alam:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Penilaian Dampak Bencana:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Pembersihan dan Pengelolaan Limbah:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Restorasi Vegetasi:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Menanam kembali pohon dan vegetasi yang hancur untuk mencegah
                  erosi tanah dan memperbaiki habitat satwa liar.
                </li>
                <li>
                  Menggunakan tanaman lokal yang adaptif terhadap kondisi
                  lingkungan setempat.
                </li>
              </ul>
            </li>
            <li>
              <strong>Pengelolaan Air:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Memperbaiki dan membersihkan sumber air yang tercemar.</li>
                <li>
                  Membuat sistem pengelolaan air yang lebih baik untuk
                  menghindari banjir dan kekeringan di masa mendatang.
                </li>
              </ul>
            </li>
            <li>
              <strong>Rehabilitasi Habitat:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Pendidikan dan Kesadaran Masyarakat:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Pengembangan Infrastruktur Tahan Bencana:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Kolaborasi dan Koordinasi:</strong>
              <ul className="list-disc list-inside ml-4">
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
              <strong>Pemantauan dan Evaluasi:</strong>
              <ul className="list-disc list-inside ml-4">
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
      </main>
    </div>
  );
}

export default PemulihanLingkungan;
