import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0 flex">
        <button className="mx-2  bg-white font-medium py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg text-black">
          ▷ Play{" "}
        </button>
        <button className="hidden md:block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          {" "}
          <span className="h-10 w-10">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
