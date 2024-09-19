import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //search movies in TMDB;
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an Api call to openai and get movie results:
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies from the quesry" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the Example result given ahead. Example Result: gadar,sholey,Don,Koi mil gaya";
    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptresults.choices) {
      //"TODO:WRITE error handling"
    }
    const gptMovies = gptresults.choices?.[0].message?.content.split(",");

    //For each movie i need to search in TMDB:--->

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
          ref={searchText}
        />

        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg flex items-center justify-center col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
