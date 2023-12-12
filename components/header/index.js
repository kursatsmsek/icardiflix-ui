import React from "react";
import Navbar from "../navbar";
import { getDictionary } from "@/lib/dictionary";

async function Header({ lang }) {
  const i18n = await getDictionary(lang);

  return <Navbar lang={lang} i18n={i18n} />;
}

export default Header;
