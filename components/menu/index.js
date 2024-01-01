"use client";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Icardi from "@/assets/menu-photo.png";
import {
  clickAddVideo,
  clickDeveloperContact,
  clickFigureToy,
  clickLogo,
} from "@/utils/apiCalls";

function HamburgerMenu({ lang, i18n }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex justify-center text-base bg-[gray]/70 p-1 rounded w-full h-full items-center">
      <TiThMenu onClick={() => setDrawerOpen(true)} />

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="flex flex-col w-72 h-full text-[red]/80 bg-[#141414]">
          <div className="h-1/4 flex justify-center items-center">
            <Link href={`/${lang}`} onClick={async () => await clickLogo()}>
              <Image
                src="/icardiflix-logo.png"
                width={180}
                height={100}
                className="cursor-pointer object-contain w-auto h-auto m-4"
                alt="icardiflix logo"
                onClick={() => setDrawerOpen(false)}
              />
            </Link>
          </div>
          <div className="h-2/4 flex flex-col justify-center bg-[#141414]">
            <button className="block p-3 m-4 bg-white border-4 border-red-500 rounded shadow dark:border-red-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
              <Link
                className=" p-3 rounded"
                href={`/${lang}/add-video`}
                onClick={async () => {
                  await clickAddVideo();
                  setDrawerOpen(false);
                }}
              >
                {i18n.navigation.addVideo}
              </Link>
            </button>
            <button className="block p-3 m-4 bg-white border-4 border-red-500 rounded shadow dark:border-red-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
              <Link
                className=" p-3 rounded"
                href={`/${lang}/developer-contact`}
                onClick={async () => {
                  await clickDeveloperContact();
                  setDrawerOpen(false);
                }}
              >
                {i18n.navigation.developerContact}
              </Link>
            </button>
            <button className="block p-3 m-4 bg-white border-4 border-red-500 rounded shadow dark:border-red-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
              <Link
                className=" p-3 rounded"
                href={`/${lang}/3d-figure`}
                onClick={async () => {
                  await clickFigureToy();
                  setDrawerOpen(false);
                }}
              >
                {i18n.navigation.figureToy}
              </Link>
            </button>
          </div>
          <div className="h-1/4 flex justify-center bg-[#141414]">
            <Link
              href={`/${lang}`}
              onClick={async () => {
                await clickLogo();
                setDrawerOpen(false);
              }}
            >
              <Image src={Icardi} width={80} height={100} alt="mauro-icardi" />
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
