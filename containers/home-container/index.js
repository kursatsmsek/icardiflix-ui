import Banner from "@/components/banner";
import Popup from "@/components/modal";
import Row from "@/components/row";
import { allVideos } from "@/utils/apiCalls";
import React from "react";

async function HomeContainer({ lang, i18n }) {
  let data = await allVideos();

  console.log("Data => ", data["news"]);

  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Popup />
      <main className="relative pt-16 pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner lang={lang} i18n={i18n} />
        <section className="md:space-y-24">
          {/* {Object.keys(data).map((category) => (
            <Row title={category} data={data} />
          ))} */}
          <Row title={i18n.categories.news} data={data["news"]} />
          <Row title={i18n.categories.popular} data={data["popular"]} />
          <Row title={i18n.categories.match} data={data["match"]} />
          <Row title={i18n.categories.biographic} data={data["biographic"]} />
          <Row title={i18n.categories.game} data={data["game"]} />
          <Row title={i18n.categories.mentions} data={data["mentions"]} />
          <Row title={i18n.categories.shorts} data={data["shorts"]} />
          <Row title={i18n.categories.other} data={data["other"]} />
        </section>
      </main>
    </div>
  );
}
export default HomeContainer;
