import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized", "success");
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };

  // Inverse case logic
  const handleInverseClick = () => {
    let newText = text
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
    setText(newText);
    props.showAlert("Text case inverted", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared successfully", "success");
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
    props.showAlert("Text copied to clipboard", "primary");
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
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea
            className={`form-control ${
              props.mode === "dark" ? "dark-mode" : ""
            }`}
            placeholder="Enter text here and try the formatting options below..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#091057" : "white", 
              color: props.mode === "dark" ? "#E0E0E0" : "#000", 
              borderColor: props.mode === "dark" ? "#3A506B" : "#ced4da", 
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleInverseClick}
        >
          Inverse Case
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpacesClick}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      {/* Summary Section */}
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#000" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {/* <p>{text.split(" ").length} Words & {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes To Read</p> */}
          <strong>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}
          </strong>{" "}
          Words
          <strong> {text.length}</strong> Characters
        </p>
        <p>
          <strong>
            {0.008 *
              text.split(" ").filter((element) => element.length !== 0).length}
          </strong>{" "}
          Minutes To Read
        </p>

        {/* Preview Style Toggle */}
        <h2>Preview</h2>
        <div
          className="btn-group"
          role="group"
          style={{ color: props.mode === "dark" ? "white" : "#091057" }}
        >
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePreviewStyleChange("normal")}
          >
            Normal
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePreviewStyleChange("bold")}
          >
            Bold
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePreviewStyleChange("italic")}
          >
            Italic
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePreviewStyleChange("underline")}
          >
            Underline
          </button>
        </div>

        {/* Preview Output with Dynamic Style */}
        <p
          style={{
            fontWeight: previewStyle === "bold" ? "bold" : "normal",
            fontStyle: previewStyle === "italic" ? "italic" : "normal",
            textDecoration: previewStyle === "underline" ? "underline" : "none",
            whiteSpace: "pre-wrap", // Ensures line breaks are respected
            wordWrap: "break-word", // Ensures long words wrap to the next line
          }}
        >
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
