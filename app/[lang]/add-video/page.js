import AddVideoContainer from "@/containers/add-video";
import { getDictionary } from "@/lib/dictionary";
import React from "react";

async function AddVideo({ params: { lang } }) {
  const i18n = await getDictionary(lang);

  return <AddVideoContainer lang={lang} i18n={i18n} />;
}

export default AddVideo;
