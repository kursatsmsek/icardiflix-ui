import Image from "next/image";
import React from "react";

function Thumbnail() {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      //   onClick={() => {
      //     setCurrentMovie(movie)
      //     setShowModal(true)
      //   }
      //   }
    >
      <Image
        src={
          "https://cdn.ntvspor.net/0c780bf287944ff28d656d071a815e49.jpg?mode=crop&w=940&h=626"
        }
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
}

export default Thumbnail;
