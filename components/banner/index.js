import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import Background from "@/assets/background.jpg";
import DeveloperContactLinkButton from "../client/developer-link-button";
import PlayButton from "../client/play-button";

function Banner({ lang, i18n }) {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={Background}
          layout="fill"
          objectFit="cover"
          alt="icardiflix"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {i18n.page.mauroIcardi}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {i18n.page.slogan}
      </p>

      <div className="flex">
        <PlayButton i18n={i18n} lang={lang} />
        <DeveloperContactLinkButton i18n={i18n} />
      </div>
    </div>
  );
}

export default Banner;
