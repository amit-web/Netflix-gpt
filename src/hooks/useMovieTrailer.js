import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  
  const moviesTrailer = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    let json = await data.json();
    //console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    //console.log(filterData);
    const trailer = filterData.length ? filterData[1] : json.results[0];
   // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
   // setTrailerId(trailer.key)
  };
  useEffect(() => {
    !trailerVideo && moviesTrailer();
  }, []);
}

export default useMovieTrailer