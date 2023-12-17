import Banner from "@/components/banner";
import Header from "@/components/header";
import Popup from "@/components/modal";
import Row from "@/components/row";
import React from "react";

function HomeContainer() {
  return (
    // <div
    //   className={`relative h-screen bg-gradient-to-b lg:h-[140vh]
    //   ${showModal && "!h-screen overflow-hidden"}
    //   `}
    // >
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      {/* <Head>
        <title>Home - Icardiflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Popup />
      <main className="relative pt-16 pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
        <section className="md:space-y-24">
          <Row />
          <Row />
          <Row />
        </section>
      </main>
    </div>
  );
}

export default HomeContainer;
