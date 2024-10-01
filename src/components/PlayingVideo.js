import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
const PlayingVideo = () => {
   const [key,setkey] = useState(null);
   const {movieId} = useParams();
   const moviesTrailer = async (movieId) => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    let json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    setkey(trailer?.key);

  };

  useEffect(()=>{
    moviesTrailer(movieId);
  },[])


  return (
    <div>
      <div className="w-full h-full">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
  
    </div>
         
    </div>
  )
}

export default PlayingVideo