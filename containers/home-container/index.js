import Banner from "@/components/banner";
import Section from "@/components/section";
import { allVideos } from "@/utils/apiCalls";
import React from "react";

async function HomeContainer({ lang, i18n }) {
  let data = await allVideos();

  console.log("Data => ", data["news"]);

  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <main className="relative pt-16 pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner lang={lang} i18n={i18n} />
        <Section lang={lang} i18n={i18n} data={data} />
      </main>
    </div>
  );
}
export default HomeContainer;
