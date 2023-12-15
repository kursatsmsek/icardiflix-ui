import Image from "next/image";
import React from "react";
import Kursat from "@/assets/devkursat.png";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";

function DeveloperContactContainer() {
  return (
    <div class="relative top-0 left-0 right-0 bottom-0 flex justify-center">
      <section class="flex items-center mt-20 xl:h-screen font-poppins ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div class="relative lg:max-w-md">
                <Image
                  src={Kursat}
                  alt="merry-christmas"
                  class="relative z-10 object-cover w-full rounded h-full"
                />
                <div class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p class="text-sm font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Coffee is cheap show me the code.{" "}
                    <Link
                      target="_blank"
                      href="https://www.buymeacoffee.com/kursat"
                      class="text-amber-300"
                    >
                      Click and buy me a coffee.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span class="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Full-Stack Developer
                </span>
                <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  Kürşat Şimşek
                </h1>
              </div>
              <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                Yazılım geliştiriciyim, bazen ilham gelir ve projeler
                geliştiririm. Ayrıca mühendislik öğrencisiyim. Cimbom maçlarını
                kaçırmam. Tüm takımı severim Icardi'yi ayrı severim. 🦁
              </p>
              <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                Eleştiriler ve yeni fikirler için iletişime açığım. Aşağıdaki
                bağlantılardan ulaşabilirsiniz.
              </p>
              <div class="flex">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/kursatsmsek"
                  class="pr-6 py-2"
                >
                  <FaInstagram class="text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/fckursat"
                  class="pr-6 py-2"
                >
                  <FaSquareXTwitter class="text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kursatsmsek/"
                  class="pr-6 py-2"
                >
                  <FaLinkedin class="text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/kursatsmsek"
                  class="pr-6 py-2"
                >
                  <FaGithub class="text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  href="mailto:kursatsimsek@protonmail.ch"
                  class="pr-6 py-2"
                >
                  <FaAt class="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeveloperContactContainer;
