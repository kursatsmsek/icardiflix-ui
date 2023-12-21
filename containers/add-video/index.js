"use client";
import React, { useState } from "react";

function AddVideoContainer({ lang, i18n }) {
  const emptyFormData = {
    owner: "",
    url: "",
    description: "",
    category: "",
  };

  const [data, setData] = useState(emptyFormData);

  const formOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="max-w-sm mx-auto mt-28 p-4" onSubmit={formOnSubmit}>
      {/* owner */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
            {i18n.page.youCanAddVideo} 🦁
          </p>
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {i18n.page.videoOwner}
        </label>
        <input
          id="owner"
          value={data.owner}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={i18n.page.ownerPlaceHolder}
          required
          onChange={(e) => setData({ ...data, owner: e.target.value })}
        />
      </div>
      {/* url  */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {i18n.page.youtubeLink}
        </label>
        <input
          id="url"
          type="url"
          value={data.url}
          placeholder={i18n.page.linkPlaceHolder}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setData({ ...data, url: e.target.value })}
        />
      </div>

      {/* description  */}

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {i18n.page.description}
        </label>

        <textarea
          id="description"
          value={data.description}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={i18n.page.descriptionPlaceHolder}
          required
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>

      {/* category  */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {i18n.page.category}
        </label>

        <select
          required
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          id="categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value={""}>
            {i18n.categories.choose}
          </option>
          <option value={"news"}> {i18n.categories.news}</option>
          <option value={"popular"}> {i18n.categories.popular}</option>
          <option value={"biographic"}> {i18n.categories.biographic}</option>
          <option value={"mentioned"}> {i18n.categories.mentions}</option>
          <option value={"other"}> {i18n.categories.other}</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        {i18n.button.send}
      </button>
    </form>
  );
}

export default AddVideoContainer;
