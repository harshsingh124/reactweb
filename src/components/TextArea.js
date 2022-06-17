import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const convertuppercase = () => {
    //   console.log("it was clicked");
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("You Have Converted text to uppercase", "success");
  };

  const convertlowercase = () => {
    //   console.log("it was clicked");
    const newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("You Have Converted text to lowercase", "success");
  };

  const copytxt = () => {
    var texxt = document.getElementById("box");
    texxt.select();
    navigator.clipboard.writeText(texxt.value);
    props.showalert("You Have Copied the Text", "success");
  };

  const handleonchange = () => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 my-5">
        <h1 className="text-center"> {props.heading} </h1>
        <label htmlFor="box" className="form-label">
          {props.text}
        </label>
        <textarea
          className="form-control"
          value={text}
          id="box"
          onChange={handleonchange}
          rows="8"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={convertuppercase}
      >
        Convert To UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={convertlowercase}
      >
        Convert To LowerCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={copytxt}
      >
        Copy Text
      </button>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <h1> Your Text Summary </h1>
            <p>
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }
              : words
            </p>
            <p> {text.length}: letters </p>
            <p> {0.008 * text.split(" ").length}: Minutes to Read </p>
          </div>
          <div className="col-4">
            <h1> Preview </h1> <h6> {text} </h6>
          </div>
          <div className="col-4">
            <h1> ASCII Value </h1> <h6> {text.codePointAt()} </h6>
          </div>
        </div>
      </div>
    </>
  );
}
