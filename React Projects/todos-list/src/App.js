import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


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
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    // Fragmentation
    <>
      <Navbar title="Text Editor" home="Home" aboutUs="About Us" mode={mode} toggleMode={toggleModeFun} />
      <TextForm mode={mode} />
    </>
  );
}

export default App;
