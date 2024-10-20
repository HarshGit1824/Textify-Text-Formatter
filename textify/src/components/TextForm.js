import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  // Inverse case logic
  const handleInverseClick = () => {
    let newText = text
      .split("")
      .map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [previewStyle, setPreviewStyle] = useState("normal");

  const handlePreviewStyleChange = (style) => {
    setPreviewStyle(style);
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here and try the formatting options below..."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>
          Capitalize
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>
          Reverse Text
        </button>

        <button className="btn btn-secondary mx-1 my-1" onClick={handleInverseClick}>
          Inverse Case
        </button>
        
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpacesClick}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      {/* Summary Section */}
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {/* <p>{text.split(" ").length} Words & {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes To Read</p> */}

          <strong>{text.split(/\s+/).filter((element) => element.length !== 0).length}</strong> Words
          <strong> {text.length}</strong> Characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").filter((element) => element.length !== 0).length}</strong> Minutes To Read
        </p>

        {/* Preview Style Toggle */}
        <h2>Preview</h2>
        <div className="btn-group" role="group" >
          <button className="btn btn-outline-secondary" onClick={() => handlePreviewStyleChange("normal")}>
            Normal
          </button>
          <button className="btn btn-outline-secondary" onClick={() => handlePreviewStyleChange("bold")}>
            Bold
          </button>
          <button className="btn btn-outline-secondary" onClick={() => handlePreviewStyleChange("italic")}>
            Italic
          </button>
          <button className="btn btn-outline-secondary" onClick={() => handlePreviewStyleChange("underline")}>
            Underline
          </button>
        </div>

        {/* Preview Output with Dynamic Style */}
        <p style={{ 
          fontWeight: previewStyle === "bold" ? "bold" : "normal", 
          fontStyle: previewStyle === "italic" ? "italic" : "normal", 
          textDecoration: previewStyle === "underline" ? "underline" : "none",
          whiteSpace: "pre-wrap", // Ensures line breaks are respected
          wordWrap: "break-word"  // Ensures long words wrap to the next line
        }}>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}

