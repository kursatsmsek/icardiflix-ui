import { getVideo } from "@/utils/apiCalls";
import Image from "next/image";
import React from "react";

function Thumbnail({
  date,
  youtubeUrl,
  photoUrl,
  setIsOpen,
  id,
  setModalData,
}) {
  const openVideo = async () => {
    let videoData = await getVideo(id);
    setModalData(videoData);
    setIsOpen(true);
  };

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={openVideo}
    >
      <Image
        src={photoUrl}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
}

export default Thumbnail;
