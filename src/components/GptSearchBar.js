import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langkey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
         
         <form className='bg-white w-1/2 grid grid-cols-12 rounded-lg '>
              
              <input type="text" placeholder={lang[langkey].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>

               <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langkey].search}</button>
         </form>


    </div>
  )
}

export default GptSearchBar