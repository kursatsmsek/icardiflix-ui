"use client";
import Popup from "@/components/modal";
import { clickIntroPlay, getIntroStatistic } from "@/utils/apiCalls";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

function PlayButton({ lang, i18n }) {
  const [isOpen, setIsOpen] = useState(false);

  const [viewCount, setViewCount] = useState(async () => {
    return await getIntroStatistic();
  });

  const getCount = async () => {
    const count = await getIntroStatistic();

    setViewCount(count);
  };

  useEffect(() => {
    getCount();
  }, []);

  const [modalData, setModalData] = useState({
    id: "0",
    youtubeUrl: "https://www.youtube.com/watch?v=7YRTcNtv8pk",
    photoUrl: "https://www.youtube.com/watch?v=7YRTcNtv8pk",
    owner: "Galatasaray",
    descEnglish:
      "Mauro Emanuel Icardi Rivero... Songs have been written in his name, songs sung about him. It's time to let the song he taught all of Turkey reach Europe now... 🫱😀🫲",
    descTurkish:
      "Mauro Emanuel Icardi Rivero... Adına şarkılar yazıldı, okunan şarkılar ona yorumlandı. Tüm Türkiye'ye ezberlettiği şarkıyı şimdi Avrupa'ya dinletme zamanı... 🫱😀🫲",
    descSpanish:
      "Mauro Emanuel Icardi Rivero... Se escribieron canciones en su nombre, las canciones cantadas fueron interpretadas para él. Ahora ha llegado el momento de hacer que Europa escuche la canción que había memorizado por toda Turquía... 🫱😀🫲",
    category: "POPULAR",
    views: viewCount,
    date: "2023-12-31T19:59:10.914+00:00",
  });

  return (
    <>
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
        lang={lang}
        i18n={i18n}
      />
      <button
        className="bannerButton bg-white text-black"
        onClick={async () => {
          await clickIntroPlay();
          setIsOpen(true);
        }}
      >
        <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
        {i18n.button.play}
      </button>
    </>
  );
}

export default PlayButton;
