import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user = useSelector((state)=>state.user);
  const showgptSearch = useSelector((state)=>state.gpt.showGptSearch)
  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe()
  }, []);
  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error")
    });
  }
  const handleGPTSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }
  const handlelanguageChange= (e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-44' src={LOGO_URL} alt="logo" />
       {user && <div className='flex p-2'>
         {showgptSearch && 
         <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handlelanguageChange}>
               {SUPPORTED_LANGUAGES.map(lang=> <option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button onClick={handleGPTSearchClick} className='text-white bg-purple-500 py-2 px-4 mx-4 rounded-lg '>{showgptSearch?"GPT Search":"Homepage"}</button>
          <img className='w-12 h-12 m-1' src={user?.photoURL} alt="profile-btn" />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign-Out</button>
        </div>}
    </div>
  )
}

export default Header