"use client";
import Popup from "@/components/modal";
import { clickIntroPlay } from "@/utils/apiCalls";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";

function PlayButton({ lang, i18n }) {
  const [isOpen, setIsOpen] = useState(false);

  const [modalData, setModalData] = useState({
    id: "0",
    youtubeUrl: "https://www.youtube.com/watch?v=7YRTcNtv8pk",
    photoUrl: "https://www.youtube.com/watch?v=7YRTcNtv8pk",
    owner: "Galatasaray",
    descEnglish:
      "Tüm Türkiye'ye ezberlettiği şarkıyı şimdi Avrupa'ya dinletme zamanı... 🫱😀🫲",
    descTurkish:
      "Tüm Türkiye'ye ezberlettiği şarkıyı şimdi Avrupa'ya dinletme zamanı... 🫱😀🫲",
    descSpanish:
      "Tüm Türkiye'ye ezberlettiği şarkıyı şimdi Avrupa'ya dinletme zamanı... 🫱😀🫲",
    category: "POPULAR",
    views: "100",
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
