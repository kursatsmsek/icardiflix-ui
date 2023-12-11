import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

function Banner() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`https://wallpapercave.com/wp/wp11861719.jpg`}
          layout="fill"
          objectFit="cover"
          alt="{movie?.title || movie?.name || movie?.original_name}"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        Mauro Icardi
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        Adına şarkılar yazıldı, okunan şarkılar ona yorumlandı. Tüm Türkiye'ye
        ezberlettiği şarkıyı şimdi Avrupa'ya dinletme zamanı...
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Oynat
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          //   onClick={() => {
          //     setCurrentMovie(movie)
          //     setShowModal(true)
          //   }}
        >
          Geliştirici İletişim
          <IoIosContact className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
