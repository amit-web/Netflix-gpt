import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MovieList = ({ title, movies }) => {
 const navigate = useNavigate();
const handleOnClick = (movieId)=>{
  navigate(`/PlayingVideo/${movieId}`);
}
  return (
    <div className="p-6">
      <h1 className=" text-lg md:text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex cursor-pointer" >
          {movies?.map((movie) => (
            <div key={movie.id} onClick={()=>handleOnClick(movie.id)}>         
                  <MovieCard  poster_path={movie.poster_path} />
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
