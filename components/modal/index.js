"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import MuiModal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";

function Popup({ isOpen, setIsOpen, modalData, setModalData, lang, i18n }) {
  const [muted, setMuted] = useState(false);

  function dateFormat(date) {
    const tarih = new Date(date);

    const gun = tarih.getDate();
    const ay = tarih.getMonth() + 1;
    const yil = tarih.getFullYear();

    const result = `${gun < 10 ? "0" : ""}${gun}.${
      ay < 10 ? "0" : ""
    }${ay}.${yil}`;

    return result;
  }

  return (
    <MuiModal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={() => setIsOpen(false)}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <IoMdClose className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={modalData.youtubeUrl}
            controls={true}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
            playing
            muted={muted}
          />
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">{modalData.owner}</p>
              {/* <p className="font-light">{dateFormat(modalData.date)} </p> */}
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">
                {lang === "tr" && modalData.descTurkish}
                {lang === "en" && modalData.descEnglish}
                {lang === "es" && modalData.descSpanish}
              </p>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="mb-2">
                  <span className="text-[gray]">{i18n.page.views} </span>
                  <div className="flex p-2 mt-2 cursor-pointer items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                    {modalData.views}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-[gray]">{i18n.page.category} </span>
                  <div className="flex p-2 mt-2 cursor-pointer items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                    {modalData.category}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-[gray]">Tarih </span>
                  <div className="flex p-2 mt-2 cursor-pointer items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                    {dateFormat(modalData.date)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Popup;
