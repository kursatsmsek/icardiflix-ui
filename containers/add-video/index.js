"use client";
import React, { useState } from "react";

function AddVideoContainer() {
  const emptyFormData = {
    owner: "",
    url: "",
    description: "",
    category: "",
  };

  const [data, setData] = useState(emptyFormData);

  const formOnSubmit = (e) => {
    e.preventDefault();
    console.log("data => ", data);
  };

  return (
    <form className="max-w-sm mx-auto mt-28 p-4" onSubmit={formOnSubmit}>
      {/* owner */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
            Sitede olmasını istediğiniz videoyu ekleyebilirsiniz. Sadece yüksek
            kaliteli videolar onaylanır ve sergilenir. 🦁
          </p>
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Video Sahibi
        </label>
        <input
          id="owner"
          value={data.owner}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Galatasaray"
          required
          onChange={(e) => setData({ ...data, owner: e.target.value })}
        />
      </div>
      {/* url  */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Youtube Linki
        </label>
        <input
          id="url"
          type="url"
          value={data.url}
          placeholder="Ör: youtube.com/watch?v=7YRTcNtv8pk"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setData({ ...data, url: e.target.value })}
        />
      </div>

      {/* description  */}

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Açıklama
        </label>

        <textarea
          id="description"
          value={data.description}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Video hakkında bir şeyler..."
          required
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>

      {/* category  */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Kategori
        </label>

        <select
          required
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          id="categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value={""}>
            Seçin
          </option>
          <option value={"news"}>Haberler</option>
          <option value={"popular"}>En Çok İzlenenler</option>
          <option value={"biographic"}>Biyografik</option>
          <option value={"mentioned"}>Bahsedilenler</option>
          <option value={"other"}>Diğer</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Gönder
      </button>
    </form>
  );
}

export default AddVideoContainer;
