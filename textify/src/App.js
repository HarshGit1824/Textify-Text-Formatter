// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');  // whether the dark mode is enable or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0B192C';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  } 
  return (
    <>

      <Navbar title="TEXTIFY📝" home='Home' aboutText="About Textify" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="Heads up! Use Textify to transform and style your text instantly. Explore the formatting options below, and dismiss this tip when you're ready!"/>
      <div className="container my-3">
      <TextForm heading="Enter your text and select the case you want to convert it to." mode={mode}/>
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
