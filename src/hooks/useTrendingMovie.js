import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovie = ()=>{
    const dispatch = useDispatch();
    const trendingMovie = useSelector(store=>store.movies.trendingMovie)
    const getTrendingMovies = async()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
            const json = await data.json();
            dispatch(addTrendingMovies(json.results));
    }
    useEffect(()=>{
      !trendingMovie && getTrendingMovies();
    },[])
}


export default useTrendingMovie;