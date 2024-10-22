// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');  // whether the dark mode is enable or not

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0B192C';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  } 
  return (
    <>

      <Navbar title="TEXTIFY📝" home='Home' aboutText="About Textify" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter your text and select the case you want to convert it to." mode={mode}/>
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
