import React, { useState } from "react";
import beranda from "../assets/logoberanda.svg";
import angin from "../assets/logoangin.svg";
import informasi from "../assets/pusatinformasi.svg";
import lingkungan from "../assets/lingkungan.svg";
import Map from "./Maps";
import "./Home.css";
import Weather from "./Weather";
import Clock from "./Clock";
import PemulihanLingkungan from "./PemulihanLingkungan";
import CurrentWeather from "./CurrentWeather";
import AirPollution from "./kualitasUdara";
import AirQuality from "./Polusi";
import PusatInformasi from "./PusatInformasi";

function Home() {
  const [activeTab, setActiveTab] = useState("beranda");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-full">
      <aside className="bg-white h-full max-w-3xl">
        <div className="flex flex-col items-center ml-24">
          <nav className="flex flex-col w-56">
            <div className="flex flex-col my-24">
              <button
                className={`text-black px-4 py-2 rounded-l-3xl font-semibold h-14 flex items-center ${
                  activeTab === "beranda" ? "bg-warnabiru" : ""
                }`}
                onClick={() => handleTabClick("beranda")}
              >
                <img src={beranda} alt="Beranda" className="size-8 mx-4" />
                Beranda
              </button>
            </div>
            <div className="flex flex-col mb-24">
              <button
                className={`text-black px-4 py-2 rounded-l-3xl font-semibold h-14 flex items-center ${
                  activeTab === "kualitasUdara" ? "bg-warnabiru" : ""
                }`}
                onClick={() => handleTabClick("kualitasUdara")}
              >
                <img src={angin} alt="Beranda" className="size-8 mx-4" />
                Kualitas Udara
              </button>
            </div>
            <div className="flex flex-col mb-24">
              <button
                className={`text-black px-4 py-2 rounded-l-3xl font-semibold h-14 flex items-center ${
                  activeTab === "pusatInformasi" ? "bg-warnabiru" : ""
                }`}
                onClick={() => handleTabClick("pusatInformasi")}
              >
                <img src={informasi} alt="Beranda" className="size-8 mx-4" />
                Pusat Informasi
              </button>
            </div>
            <div className="flex flex-col mb-24">
              <button
                className={`text-black px-4 py-2 rounded-l-3xl font-semibold h-14 flex items-center ${
                  activeTab === "pemulihanLingkungan" ? "bg-warnabiru" : ""
                }`}
                onClick={() => handleTabClick("pemulihanLingkungan")}
              >
                <img src={lingkungan} alt="Beranda" className="size-8 mx-4" />
                Pemulihan Lingkungan
              </button>
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex-grow rounded-3xl bg-warnabiru h-auto mr-48 content-box p-4 max-w-7xl mx-auto">
        {activeTab === "beranda" && (
          <div>
            <p className="font-medium p-2">
              <Clock />
            </p>
            <Weather />
            <Map />
          </div>
        )}
        {activeTab === "kualitasUdara" && (
          <div>
            <CurrentWeather />
            <AirPollution />
            <AirQuality />
          </div>
        )}
        {activeTab === "pusatInformasi" && (
          <div>
            <PusatInformasi />
          </div>
        )}
        {activeTab === "pemulihanLingkungan" && (
          <div>
            <PemulihanLingkungan />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
