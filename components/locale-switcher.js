"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLanguageSharp } from "react-icons/io5";
import GB from "country-flag-icons/react/3x2/GB";
import ES from "country-flag-icons/react/3x2/ES";
import TR from "country-flag-icons/react/3x2/TR";
import HamburgerMenu from "./menu";
import {
  clickEnglishFlag,
  clickSpanishFlag,
  clickTurkishFlag,
} from "@/utils/apiCalls";

export default function LocaleSwitcher({ lang, i18n }) {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex items-center justify-center space-x-4 md:flex mr-2">
      <li className={`headerLink ${lang === "en" && "hidden"}`}>
        <Link
          href={redirectedPathName("en")}
          onClick={async () => await clickEnglishFlag()}
        >
          <GB title="English" className="h-5" />
        </Link>
      </li>
      <li
        className={`headerLink ${lang === "tr" && "hidden"}`}
        onClick={async () => await clickTurkishFlag()}
      >
        <Link href={redirectedPathName("tr")}>
          <TR title="Türkçe" className="h-5" />
        </Link>
      </li>
      <li
        className={`headerLink ${lang === "es" && "hidden"}`}
        onClick={async () => await clickSpanishFlag()}
      >
        <Link href={redirectedPathName("es")}>
          <ES title="Español" className="h-5" />
        </Link>
      </li>
      <li className="block md:hidden">
        <HamburgerMenu lang={lang} i18n={i18n} />
      </li>
    </ul>
  );
}
