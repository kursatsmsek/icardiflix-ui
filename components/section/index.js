"use client";
import React, { useState } from "react";
import Popup from "../modal";
import Row from "../row";

function Section({ lang, i18n, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const [modalData, setModalData] = useState({
    id: "",
    youtubeUrl: "",
    photoUrl: "",
    owner: "",
    descEnglish: "",
    descTurkish: "",
    descSpanish: "",
    category: "",
    views: "",
    date: "",
  });

  return (
    <section className="md:space-y-24">
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
        lang={lang}
        i18n={i18n}
      />
      <Row
        title={i18n.categories.news}
        data={data["news"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.popular}
        data={data["popular"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.match}
        data={data["match"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.biographic}
        data={data["biographic"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.game}
        data={data["game"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.mentions}
        data={data["mentions"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.shorts}
        data={data["shorts"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
      <Row
        title={i18n.categories.other}
        data={data["other"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
    </section>
  );
}

export default Section;
