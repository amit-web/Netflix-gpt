import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovie from '../hooks/useTrendingMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovie();
 useUpcomingMovie()
  return (
    <div>
       <Header/>
       <Maincontainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse