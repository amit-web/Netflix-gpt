import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen w-screen object-cover" src={BACKGROUND_URL} alt="backgroundImg" />
      </div>

      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
