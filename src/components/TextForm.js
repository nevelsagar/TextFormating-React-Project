import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleUpClick = () => {
    // console.log("Uppercase was clicked",text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
    
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked",text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
    
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked",text)
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!","success");
    
  }
  
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copy to Clipboard!","success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    console.log(newText)
    
    // console.log(newText.join(" "))
    setText(newText.join(" "))
    props.showAlert("Extra Space has been removed!","success");
  }


  const handleOnchange = (event) => {
    // console.log("on change")
    setText(event.target.value)

  }


  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#323255",
        color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to Preview"}</p>
      </div>

    </div>
  )
}
