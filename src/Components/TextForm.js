import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log('UpperCase');
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowClick =() =>{
        console.log('UpperCase');
        let lowerText = text.toLowerCase();
        setText(lowerText);
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
    <div className='container'>
        <h1> Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} Characters and {(text.split(" ").length * 0.008).toFixed(3)} Minutes Reading </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    
  )
}

TextForm.propTypes = {
  heading : PropTypes.string.isRequired,
}

