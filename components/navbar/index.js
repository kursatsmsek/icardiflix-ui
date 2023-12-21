"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../locale-switcher";
import Link from "next/link";

function Navbar({ lang, i18n }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href={`/${lang}`}>
          <Image
            src="/icardiflix-logo.png"
            width={160}
            height={100}
            className="cursor-pointer object-contain w-auto h-auto mr-4"
            alt="netflix logo"
          />
        </Link>

        <Link
          className="p-2 text-sm rounded hidden md:inline-block transition duration-300 hover:bg-gray-700 hover:bg-opacity-70"
          href={`/${lang}/add-video`}
        >
          Add Video
        </Link>
        <Link
          className="p-2 text-sm rounded hidden md:inline-block transition duration-300 hover:bg-gray-700 hover:bg-opacity-70"
          href={`/${lang}/developer-contact`}
        >
          Developer Contact
        </Link>
        <Link
          className="p-2 text-sm rounded hidden md:inline-block transition duration-300 hover:bg-gray-700 hover:bg-opacity-70"
          href={`/${lang}/3d-figure`}
        >
          3D Figür Oyuncak
        </Link>
      </div>

      <div className="items-center ml-4 space-x-4 text-sm font-light">
        <LocaleSwitcher lang={lang} />
      </div>
    </header>
  );
}

export default Navbar;
