import React from "react";
import Thumbnail from "../thumbnail";

function Row() {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        Kürşat
      </h2>
      <div className="group relative md:-ml-2">
        <div
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          //   className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
          //     !isMoved && "hidden"
          //   }`}
          //   onClick={() => handleClick('left')}
        />

        <div
          //   ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {/* {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))} */}
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

        <div
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          //   onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Row;
