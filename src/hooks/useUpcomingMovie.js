import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();
    const upcomingMovie = useSelector(store=>store.movies.upcomingMovie)
    const getUpcomingMovies = async()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
      !upcomingMovie && getUpcomingMovies();
    },[])
}

export default useUpcomingMovie;