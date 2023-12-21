import HomeContainer from "@/containers/home-container";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }) {
  const i18n = await getDictionary(lang);

  return <HomeContainer lang={lang} i18n={i18n} />;
}
