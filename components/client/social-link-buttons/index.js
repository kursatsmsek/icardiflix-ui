"use client";
import {
  clickEmail,
  clickGithub,
  clickInstagram,
  clickLinkedin,
  clickTwitter,
} from "@/utils/apiCalls";
import Link from "next/link";
import React from "react";
import {
  FaAt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex">
      <Link
        target="_blank"
        href="https://www.instagram.com/kursatsmsek"
        className="pr-6 py-2"
        onClick={async () => await clickInstagram()}
      >
        <FaInstagram className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href="https://twitter.com/fckursat"
        className="pr-6 py-2"
        onClick={async () => await clickTwitter()}
      >
        <FaSquareXTwitter className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/kursatsmsek/"
        className="pr-6 py-2"
        onClick={async () => await clickLinkedin()}
      >
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/kursatsmsek"
        className="pr-6 py-2"
        onClick={async () => await clickGithub()}
      >
        <FaGithub className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href="mailto:kursatsimsek@protonmail.ch"
        className="pr-6 py-2"
        onClick={async () => await clickEmail()}
      >
        <FaAt className="text-2xl" />
      </Link>
    </div>
  );
}

export default SocialLinks;
