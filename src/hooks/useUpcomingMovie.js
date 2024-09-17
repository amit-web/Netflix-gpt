import { useDispatch } from "react-redux";
import { addTrendingMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();
    const getUpcomingMovies = async()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
            const json = await data.json();
            console.log(json.results,"upcoming data");
            dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
      getUpcomingMovies();
    },[])
}

export default useUpcomingMovie;