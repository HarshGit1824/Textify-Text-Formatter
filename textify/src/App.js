// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');  // whether the dark mode is enable or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  } 
  return (
    <>

      <Navbar title="TEXTIFY📝" home='Home' aboutText="About Textify" mode={mode} toggleMode={toggleMode}/>
      
      <div className="container my-3">
      <TextForm heading="Enter your text and select the case you want to convert it to."/>
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
