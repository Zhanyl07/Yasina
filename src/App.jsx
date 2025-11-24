// import { RouterProvider } from 'react-router-dom'
// import './App.css'
// import myRouter from './router'
// import "./components/WelcomeScreen.jsx/Welcome"

// function App() {

//   return (
//     <div className='wrapper'>
//     <RouterProvider router={myRouter}/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";
// import WelcomeScreen from "./components/WelcomeScreen";
// import MainSite from "./components/MainSite";

// function App() {
//   const [showWelcome, setShowWelcome] = useState(true);

//   return (
//     <>
//       {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
//       {!showWelcome && <MainSite />}
//     </>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import myRouter from './router';
// import WelcomeScreen from './components/WelcomeScreen/Welcome';
import Welcome from './components/WelcomeScreen.jsx/Welcome';
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 3 секунды показываем welcome
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='wrapper'>
      {showWelcome ? <Welcome /> : <RouterProvider router={myRouter} />}
    </div>
  );
}

export default App;