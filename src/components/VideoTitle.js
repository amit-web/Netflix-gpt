import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-4 md:px-20 lg:px-32 xl:px-20 absolute text-white bg-gradient-to-r from-black w-full aspect-video overflow-hidden">
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
        <h1 className="hidden md:block text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          {title}
        </h1>
        <p className="hidden md:block py-4 text-base md:text-lg lg:text-xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2 leading-relaxed">
          {overview}
        </p>
        <div className="my-4 flex flex-col md:flex-row items-center">
          <button className="hidden md:block mx-2 bg-white font-medium py-1 px-3 text-sm md:py-2 md:px-4 md:text-lg hover:bg-opacity-80 rounded-lg text-black">
            ▷ Play
          </button>
          <button className="hidden md:block bg-gray-500 text-white p-1 md:p-2 md:px-4 text-sm md:text-lg bg-opacity-50 rounded-lg">
            <span className="h-8 w-8">ⓘ</span> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
