// // import logo from './logo.svg';

// import "./App.css";
// import Alert from "./components/Alert";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
// import React, { useState } from "react";
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState("light"); // whether the dark mode is enable or not

//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });

//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#0B192C";
//       showAlert("Dark mode has been enabled", "success");
//       document.title = "Textify - Dark Mode";

//       //Flash Title -
//       // setInterval(() => {
//       //   document.title = 'Textify is Amazing App';
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = 'Install Textify Now';
//       // }, 1500);
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//       document.title = "Textify - Light Mode";
//     }
//   };
//   return (
//     <>
//       <Router>
//         <Navbar
//           title="TEXTIFY📝"
//           home="Home"
//           aboutText="About Textify"
//           mode={mode}
//           toggleMode={toggleMode}
//         />
//         <Alert alert={alert} />
//         <div className="container my-3">

//           <Routes>
//             <Route path="/about">
//               <About />
//             </Route>

//             <Route path="/">
//               <TextForm
//                 showAlert={showAlert}
//                 heading="Enter your text and select the case you want to convert it to."
//                 mode={mode}
//               />
//             </Route>
//           </Routes>
//         </div>
//       </Router>

//     </>
//   );
// }

// export default App;



import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether the dark mode is enable or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B192C";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textify - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textify - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TEXTIFY📝"
          home="Home"
          aboutText="About Textify"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text and select the case you want to convert it to." mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
