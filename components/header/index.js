"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GB from "country-flag-icons/react/3x2/GB";
import ES from "country-flag-icons/react/3x2/ES";
import TR from "country-flag-icons/react/3x2/TR";

function Header() {
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
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">
            <GB title="United States" className="h-5" />
          </li>
          <li className="headerLink">
            <ES title="United States" className="h-5" />
          </li>
          <li className="headerLink">
            <TR title="United States" className="h-5" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
