import React, { useRef, useState } from "react";
import Header from "./Header";
import checkvalidateData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
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
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
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
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
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

      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black bg-opacity-80 text-white w-full max-w-sm sm:max-w-md md:max-w-lg p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-3xl py-1 text-white">
            {showSininform ? "Sign In" : "Sign Up"}{" "}
          </h1>
          {!showSininform && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700  border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700  border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700  border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
    </div>
  );
};

export default Login;
