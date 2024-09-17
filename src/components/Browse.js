import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
 const nowPlayingData = useNowPlayingMovies();
 console.log(nowPlayingData)
  return (
    <div>
       <Header/>

       <Maincontainer/>
       <SecondaryContainer/>
       {/* 
       
       Maincontainer 
       --videobackground 
       --video Title


       secondary container
         ---movieList *n
           -- cards * n
       
       

       */}
    </div>
  )
}

export default Browse