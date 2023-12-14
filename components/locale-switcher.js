"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLanguageSharp } from "react-icons/io5";
import GB from "country-flag-icons/react/3x2/GB";
import ES from "country-flag-icons/react/3x2/ES";
import TR from "country-flag-icons/react/3x2/TR";

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="hidden space-x-4 md:flex">
      <li className={`headerLink ${lang === "en" && "hidden"}`}>
        <Link href={redirectedPathName("en")}>
          <GB title="English" className="h-5" />
        </Link>
      </li>
      <li className={`headerLink ${lang === "tr" && "hidden"}`}>
        <Link href={redirectedPathName("tr")}>
          <TR title="Türkçe" className="h-5" />
        </Link>
      </li>
      <li className={`headerLink ${lang === "es" && "hidden"}`}>
        <Link href={redirectedPathName("es")}>
          <ES title="Español" className="h-5" />
        </Link>
      </li>
    </ul>
  );
}
