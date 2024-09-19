import React, { useRef, useState } from "react";
import Header from "./Header";
import checkvalidateData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";
import { BACKGROUND_URL, USER_AVTAR } from "../utils/constants";


const Login = () => {
  const [showSininform, setShowSininform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSininform = () => {
    setShowSininform(!showSininform);
  };
  const handleButtonClick = () => {
    let message = checkvalidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //signIn signUP logic
    if (!showSininform) {
        // Sign Up Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL:USER_AVTAR,
            })
              .then(() => {
                const { uid, email, displayName,photoURL} = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user  
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            errorCode + "-" + errorMessage
          )
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="h-screen w-screen object-cover"
          src={BACKGROUND_URL}
          alt="backgroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-10/12 md:w-3/12 my-16 mx-auto right-0 left-0 bg-opacity-80 max-h-[85vh]  text-white"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {showSininform ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!showSininform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />
        <p className="text-red-500  font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg text-white "
          onClick={handleButtonClick}
        >
          {showSininform ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white py-4" onClick={toggleSininform}>
          {" "}
          {showSininform
            ? "New to Netflix? Sign Up Now"
            : "Already Registered ? SignIn now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
