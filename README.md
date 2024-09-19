# NETFLIX GPT
--create react app
--configured tailwind css
--Header
--Routing of app
--Login form !
--signup form
--form validation
--useRef hook!!
--firebase setup
--deploed our app on firebase 
--create signup user Account
--Implement signIn user API
--Set up our store usig redux
--update profile
--bug fix fo user displayname and profile picture update;
--bug fix of roting ,using authentication, without authentication restricting user to go to browse page;
--Unsubscribed to the onAuthStateChange callback;
--Add hardcoded value in constants:--->
--Register on TMDB and get API key 
-- fetch movie list of now playing to show in browse page:--->
--custom hooks for fetch movie trailer and movie list
--update store with movie data;
--planning maincontaier and secondary container;
--fetch data for trailer video
--update store with trailer video data
--embedded the youtube video and make it autoplay and mute
---tailwind classes to make main container look awesome
--Build Secondary component
--Build movie card
--Build movie list
--custom hooks for popular movie data:---->
-GPT search feature
--GPT search bar 
--Multi language feature in our app;
--Integrate the GPT API (get open AI key);
--GET OPEN AI api key;
--Fetched gpt movie suggestions from TMDB
--created gpt slice
--reused movie list component to make suggestion container
==memoization
--Adding .env file to git ignore;
--Made our site responsive


------Done with the NetflixGPT-----------


**Netflix GPT**
Netflix GPT is a movie suggestion and browsing platform, powered by OpenAI and TMDB, featuring user authentication, search, and a multi-language option. This project showcases a scalable React application with Redux, Firebase, and Tailwind CSS, and integrates AI to deliver tailored movie suggestions.

**Features**
Authentication: User login, signup, and profile management with Firebase.
Movie Suggestion: Movie suggestions using GPT and TMDB API integration.
Responsive Design: Built with Tailwind CSS, fully responsive for mobile and desktop.
Movie Trailers: Autoplaying YouTube trailers for now-playing movies.
Redux State Management: Store setup with Redux Toolkit.
Multi-Language Support: Multi-language options for search powered by GPT.
Search Functionality: AI-powered movie search bar.
Memoization: Optimized components with memoization.
Custom Hooks: Reusable hooks for fetching data (movies, trailers).
Git Version Control: .env file securely managed via gitignore.
Tech Stack
React: Frontend framework.
Redux & Redux Toolkit: State management.
Tailwind CSS: Responsive and utility-first CSS.
Firebase: Authentication and hosting.
TMDB API: Fetching movie data.
OpenAI API: Fetching GPT-based movie suggestions.


**Project Initialization**

**1. Clone the repository**

git clone https://github.com/amit-web/Netflix-gpt.git)
cd netflix-gpt

**2. Install dependencies**
npm install

**3. Firebase Configuration**
Create a Firebase project and configure it:

Go to the Firebase Console.
Set up a project and enable Firebase Authentication.
Create a .env file in the root folder and add your Firebase credentials:


REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_OPENAI_API_KEY=your-openai-api-key
REACT_APP_TMDB_API_KEY=your-tmdb-api-key

**Run the app**
npm start

**Project Structure**

src/
├── assets/        # Images, icons, and static assets
├── components/    # Reusable components (e.g., Header, MovieCard)
├── features/      # Redux slices (auth, movies, gpt suggestions)
├── hooks/         # Custom hooks for fetching data
├── pages/         # Page components (Browse, Login, Signup)
├── store/         # Redux store and configuration
└── utils/         # Helper functions and constants


npm start: Runs the app in development mode.
npm run build: Builds the app for production.!!!





