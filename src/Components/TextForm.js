import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log('UpperCase');
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick =() =>{
        console.log('UpperCase');
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleCopyClick=()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    
    return (
    <>
    <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}  onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy to ClipBoard</button>

    <div className='container'>
        <h1> Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words, {text.length} Characters and {(Math.floor(text.split(" ").length * 0.008))} Minutes Reading </p>
        <h3 id ='preview'>Preview</h3>
        <p>{text === '' ? 'Enter your text to preview' : text}</p>
    </div>
    </>
    
  )
}

TextForm.propTypes = {
  heading : PropTypes.string.isRequired,
}

