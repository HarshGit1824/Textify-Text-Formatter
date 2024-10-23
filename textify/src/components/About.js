// import React, { useState } from "react";

// export default function About() {

  
//   const [myStyle, setMyStyle] = useState(
//   {
//     color: 'black',
//     backgroundColor: 'white',
//   })
//   const [btntext, setBtnText] = useState("Enable Dark Mode")

//   const toggleStyle = ()=>{
//     if(myStyle.color === 'black'){
//       setMyStyle({
//         color: 'white',
//         backgroundColor: 'black',
//         border: '1px solid white'
//       })
//       setBtnText("Enable Light Mode")

//     }else{
//       setMyStyle({
//         color:'black',
//         backgroundColor: 'white'
//       })
//       setBtnText("Enable Dark Mode")
//     }
//   }

//   return (
//     <div className="container" style={myStyle}>
//       <h1 className="my-2">About Us</h1>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               style={myStyle}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container my-3">
//         <button onClick={toggleStyle} type="button" className="btn btn-primary">
//         {btntext}
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Textify📝</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>What is Textify📝?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Textify📝</strong> is a text formatting app designed to make text manipulation easy. Whether you want to convert text to uppercase, lowercase, capitalize each word, reverse text, or remove extra spaces, Textify📝 has got you covered. The app also offers basic text formatting like bold, italic, and underline styles, providing a seamless experience for text management.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Key Features of Textify📝</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>Convert text to <strong>Uppercase</strong>, <strong>Lowercase</strong>, and <strong>Capitalize Each Word</strong>.</li>
                <li><strong>Reverse Text</strong> to flip the content.</li>
                <li><strong>Remove Extra Spaces</strong> to clean up text formatting.</li>
                <li><strong>Copy Text</strong> with a single click.</li>
                <li>Text formatting options: <strong>Bold</strong>, <strong>Italic</strong>, and <strong>Underline</strong>.</li>
                <li>Supports <strong>Dark Mode</strong> and <strong>Light Mode</strong> to adjust the viewing experience.</li>
                <li>Real-time previews and intuitive user interface.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Why Use Textify📝?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textify📝 is a user-friendly app built to simplify your text editing tasks. Whether you are a content writer, a student, or anyone dealing with text manipulation, Textify📝 offers a one-stop solution. It speeds up your workflow with intuitive controls, and the easy-to-use interface allows you to focus on your content rather than formatting issues.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
