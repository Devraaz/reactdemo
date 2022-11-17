import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter the Text");


  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="button" className="btn btn-success mx-2" onClick={handleUpCase} >Convert to Upper Case</button>
            <button type="button" className="btn btn-success mx-2" onClick={handleLowerCase} >Convert to Lower Case</button>
            
        </div>
        <div className = "container">
            <h4> Your counting Details</h4>
            <p>Words: {text.split(" ").length} and Letters: {text.length} </p>

        </div>
    </>
  )
}
