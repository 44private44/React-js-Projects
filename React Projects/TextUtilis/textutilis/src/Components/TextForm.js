import React, { useState } from 'react'

export default function TextForm(props) {

    const updateText = (event) => {
        setText(event.target.value);
        setCopyText("Copy");
    }

    const convertUpper = () => {

        // let newtext = text.toUpperCase().replace(/\s+/g, " ");
        let newtext = text.toUpperCase();

        setText(newtext);
        setCopyText("Copy");

    }
    const convertLower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        setCopyText("Copy");
    }

    const removeSpace = () => {
        // Global regular expression
        const newText = text.replace(/\s+/g, " ");
        setText(newText);
        setCopyText("Copy");
    }
    const reverseText = () => {
        const newText = text.split(" ").reverse().join(" ");
        setText(newText);
        setCopyText("Copy");
    }

    const clearText = () => {
        setText('');
        setCopyText("Copy");
    }

    // Textarea set text State
    const [text, setText] = useState(""); // State used this

    // Copy State
    const [copyText, setCopyText] = useState("Copy");

    const copyTextFun = () => {
        navigator.clipboard.writeText(text);
        setCopyText("Copied");
    }

    return (
        <>
            <div className={`textFormMainDiv text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className='mt-5'>
                    <div className='d-flex justify-content-between'>
                        <h3> Enter Text below</h3>
                        <div>
                            <button className="btn btn-dark ms-2 darkBtnEnding" onClick={copyTextFun}>{copyText}</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="" rows="15" value={text} onChange={updateText}></textarea>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <button className="btn btn-primary" onClick={convertUpper}>Convert to UpperCase</button>
                            <button className="btn btn-primary ms-2" onClick={convertLower}>Convert to LowerCase</button>
                            <button className="btn btn-primary ms-2" onClick={removeSpace}>Remove Extra Space</button>
                            <button className="btn btn-primary ms-2" onClick={reverseText}>Inverse String</button>
                        </div>
                        <div>
                            <button className="btn btn-dark ms-2 darkBtnEnding" onClick={clearText}>Clear</button>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h3>
                        Text Details
                    </h3>

                    {(() => {
                        if (text.length === 0) {
                            return <><p> <b> 0 </b> word and <b> {text.length}</b> character </p>
                                <p> <b> 0 </b> Minute take time to read </p>
                            </>
                        }
                        else {
                            const wordcount = text.split(/\s+/).filter(word => word !== "").length;
                            return <>  <p> <b>{wordcount} </b> word and <b> {text.length}</b> character </p>
                                <p> <b>{(0.008 * wordcount).toFixed(2)}</b> Minute take time to read </p> </>
                        }
                    })()}

                    <h3>Preview</h3>
                    {/* if-else text available or not  */}
                    {(() => {
                        if (text.length === 0) {
                            return <p> No Text</p>
                        }
                        else {
                            return <p> {text}</p>
                        }
                    })()}
                </div>
            </div>
        </>
    )
}
