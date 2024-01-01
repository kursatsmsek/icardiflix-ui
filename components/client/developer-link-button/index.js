"use client";
import { clickDeveloperContact } from "@/utils/apiCalls";
import Link from "next/link";
import React from "react";
import { IoIosContact } from "react-icons/io";

function DeveloperContactLinkButton({ i18n }) {
  return (
    <Link href={"/developer-contact"}>
      <button
        className="bannerButton bg-[gray]/70 ml-4 mr-4"
        onClick={async () => await clickDeveloperContact()}
      >
        {i18n.navigation.developerContact}
        <IoIosContact className="h-5 w-5 md:h-8 md:w-8" />
      </button>
    </Link>
  );
}

export default DeveloperContactLinkButton;
