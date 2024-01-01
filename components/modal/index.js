"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import MuiModal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";

function Popup({ isOpen, setIsOpen, modalData, setModalData }) {
  const [muted, setMuted] = useState(false);

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
            url={modalData?.youtubeUrl}
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
              <p className="font-semibold text-green-400">{modalData?.owner}</p>
              <p className="font-light">12.12.2023</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">
                "O anda hareketlenmemi sağlayan şey nereye gideceğimi gösteren
                içgüdüydü. Havadan gelen topun nereye düşeceğini sadece tahmin
                ettim."
                <p>Mauro Icardi</p>
              </p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Yaş: </span>
                  30
                </div>
                <div>
                  <span className="text-[gray]">Ülke: </span>
                  Arjantin
                </div>

                <div>
                  <span className="text-[gray]">Takım: </span>
                  <p>Galatasaray ❤️</p>
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
