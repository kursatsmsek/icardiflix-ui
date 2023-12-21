import DeveloperContactContainer from "@/containers/developer-container";
import { getDictionary } from "@/lib/dictionary";
import React from "react";

async function DeveloperContact({ params: { lang } }) {
  const i18n = await getDictionary(lang);

  return <DeveloperContactContainer lang={lang} i18n={i18n} />;
}

export default DeveloperContact;
