import React, { useState } from "react";
export default function PracticeTextForm(props) {
  const [text, setText] = useState("");


  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
  };

  const toLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success")
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "Success")
  };

  const copyText = () => {
    let copy = document.getElementById("myBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Copied to Clipboard", "Success")

  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  const remExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "Success")
  };


  return (
    <div className="container my-2" >
      <h1>Analyze your Text Here</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={changeText}
          rows="9" style={props.textAreaCol}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={toUpCase} style={props.buttonBg}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3 my-2"
          onClick={toLowCase} style={props.buttonBg}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={clearText} style={props.buttonBg}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={copyText} style={props.buttonBg}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2" style={props.buttonBg}
          onClick={remExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div>
        <p>{text.length>0? text.split(" ").length: 0} <b>words</b> and {text.length}
          <b> chars</b>
        </p>
        <p>{text.split(" ").length * 0.08} <b>minutes read</b></p>
        <h2>Preview :</h2>
        <p>{text.length>0? text: <strong>Enter something in the above box to view here.</strong>}</p>
      </div>
    </div>
  );
}
