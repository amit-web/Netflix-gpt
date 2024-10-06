import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showgptSearch = useSelector((state) => state.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handlelanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-4 sm:px-6 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showgptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
              onChange={handlelanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className="text-white bg-red-600 py-2 px-4 mx-2 md:mx-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 ease-in-out "
          >
            {showgptSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="flex items-center space-x-4">
            <img
              className="hidden md:block w-12 h-12 rounded-sm"
              src={user?.photoURL || "default-profile.png"}
              alt="Profile"
            />
            <button
              onClick={handleSignOut}
              className="text-white hover:text-gray-400  md:block"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
