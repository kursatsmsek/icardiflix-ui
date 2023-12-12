"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../locale-switcher";

function Navbar({ lang, i18n }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("lang => ", lang);
    console.log("i18n => ", i18n);
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
        <Image
          src="/icardiflix-logo.png"
          width={160}
          height={100}
          className="cursor-pointer object-contain"
          alt="netflix logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Developer Contact</li>
          <li className="headerLink">Add Video</li>
        </ul>
      </div>

      <div className="items-center space-x-4 text-sm font-light">
        <LocaleSwitcher lang={lang} />
      </div>
    </header>
  );
}

export default Navbar;
