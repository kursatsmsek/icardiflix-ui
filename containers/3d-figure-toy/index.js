"use client";
import React, { useState } from "react";

function FigureToyContainer() {
  const emptyFormData = {
    email: "",
  };

  const [data, setData] = useState(emptyFormData);

  const formOnSubmit = (e) => {
    e.preventDefault();
    console.log("data => ", data);
  };

  return (
    <form className="max-w-xl mx-auto mt-56 p-4" onSubmit={formOnSubmit}>
      <h1 className="text-6xl mb-10 leading-7 text-gray-500 dark:text-gray-400">
        Yakında! 🦁
      </h1>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <div className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
            Geldiğinde haber vermemizi ister misiniz ?
          </div>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <input
              id="email"
              type="email"
              value={data.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your@email.com"
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="md:col-span-1">
            <button
              type="submit"
              className="text-white text-sm bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2 md:mt-0 md:ml-2"
            >
              Haber Ver
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row w-full">
          <input
            id="owner"
            value={data.owner}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Galatasaray"
            required
            onChange={(e) => setData({ ...data, owner: e.target.value })}
          />
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2 md:mt-0 md:ml-2"
          >
            Gönder
          </button>
        </div> */}
      </div>
    </form>
  );
}

export default FigureToyContainer;
