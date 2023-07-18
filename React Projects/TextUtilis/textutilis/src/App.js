import './App.css';
import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  // Mode State
  const [mode, setMode] = useState("dark");
  if (mode === 'dark') {
    document.body.style.backgroundColor = 'black';
  }
  else {
    document.body.style.backgroundColor = 'white';
  }
  const toggleModeFun = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      // showAlert("Dark mode enable...", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode enable...", "success");
    }
  }

  // // Alert State

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type
  //   })
  // }
  // setTimeout(() => {
  //   setAlert(null);
  // }, 2500);

  return (
    // Fragmentation
    <>
      <Router>
        <Navbar title="TextUtility" home="Home" aboutUs="About Us" mode={mode} toggleMode={toggleModeFun} />
        {/* <Alertcom alert={alert} /> */}
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} />} />
          <Route exact path="/AboutUs" element={<Aboutus mode={mode}  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
