"use client";
import domainName from "../domain";
import { useState, useEffect } from "react";

export default function Tambah() {
  const [judul, setJudul] = useState("");
  const [gambar_url, set_gambar_url] = useState("image-placeholder.png");
  const [kategori, setKategori] = useState("Trending Now");

  const updateData = () => {
    const formData = new FormData();

    // Append movie data to the form data
    formData.append("judul", judul);
    formData.append("kategori", kategori);

    // Get the file input element
    const fileInput = document.querySelector('input[type="file"]');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
      // Append the selected file to the form data
      formData.append("gambar", fileInput.files[0]);
    } else {
      console.error("Please select an image file.");
      return;
    }

    fetch(domainName + "/data/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Reset form fields on success
          setJudul("");
          setKategori(kategori);
          fileInput.value = ""; // Clear the file input

          // Close the modal
          document.getElementById("button_modal_tambah").click();

          // Trigger a reload of the movie list
          document.getElementById("button_reload_list").click();
        } else {
          console.error("Error saving data: ", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const modal_tambah_toggle = () => {
    const modal = document.getElementById("modal_tambah");
    modal.classList.toggle("hidden");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_gambar_url(objectURL);
    } else {
      set_gambar_url("image-placeholder.png");
    }
  };

  return (
    <div
      id="modal_tambah"
      className="hidden w-full h-full fixed z-50 top-0 left-0"
    >
      {/* turn off */}
      <div
        onClick={modal_tambah_toggle}
        className="w-full h-full fixed top-0 left-0 z-10 bg-gray-700 opacity-50"
      ></div>

      {/* main */}
      <div className="w-1/3 fixed mt-16 z-50 bg-white rounded left-1/2 -translate-x-1/2 p-5">
        <div className="text-2xl font-semibold text-gray-900">
          Tambahkan Movie
        </div>

        {/* forms */}
        <div className="mt-6 mb-8">
          {/* Judul */}
          <div className="mb-6 flex">
            <div className="block text-sm font-medium text-gray-900 my-auto w-20">
              Judul
            </div>
            <input
              placeholder="Judul"
              type="text"
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>

          {/* Kategori */}
          <div className="flex mb-6">
            <div className="block text-sm font-medium text-gray-900 my-auto w-20">
              Kategori
            </div>
            <select
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="Trending Now">Trending Now</option>
              <option value="Binge-worthy Western Supernatural TV Shows">
                Binge-worthy Western Supernatural TV Shows
              </option>
              <option value="Anime & Anime-Inspired">
                Anime & Anime-Inspired
              </option>
              <option value="Supernatural TV Shows">
                Supernatural TV Shows
              </option>
              <option value="Popular on Netflix">Popular on Netflix</option>
              <option value="New Releases">New Releases</option>
            </select>
          </div>

          {/* Gambar */}
          <div className="col-span-full mb-6">
            <div
              htmlFor="cover-photo"
              className="block text-sm font-medium text-gray-900"
            >
              Gambar
            </div>
            <div
              onClick={() => {
                document.getElementById("file-upload").click();
              }}
              className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2"
            >
              <div className="text-center">
                <img src={gambar_url} className="w-60 rounded" />

                <div className="mt-4 text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="text-center relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div>
          {/* Cancel */}
          <button
            onClick={modal_tambah_toggle}
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>

          {/* Simpan */}
          <button
            onClick={updateData}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
