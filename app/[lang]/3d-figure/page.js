import FigureToyContainer from "@/containers/3d-figure-toy";
import { getDictionary } from "@/lib/dictionary";
import React from "react";

async function FigureToy({ params: { lang } }) {
  const i18n = await getDictionary(lang);

  return <FigureToyContainer lang={lang} i18n={i18n} />;
}

export default FigureToy;
