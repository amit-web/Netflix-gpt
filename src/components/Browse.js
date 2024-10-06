import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
      <Footer/>
    </div>
  );
};

export default Browse;
