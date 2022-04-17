import "./SubmissionForm.css"
import ReviewProblemPage from "../../pages/ReviewProblemPage/ReviewProblemPage";
import React, { useState } from 'react';

const SubmissionForm = ({createProblem}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [hints, setHints] = useState('')
    const [answer, setAnswer] = useState('')
    const [resources, setResources] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        // this keeps the page from refreshing
        let newSubmission = {
            // this is the area where we stage our data together
            // before sending off to app.js in our function call
            title: title,
            content: content,
            hints: hints,
            answer: answer,
            resources: resources
        }

        console.log(newSubmission)
        createProblem(newSubmission)  
        // here we call our function we passed down as props, 
        // it will take our newSubmission value and pass it into our 
        // function in app.js
    }

    return (
        <>
            <h3>Submission Form</h3>
            <form onSubmit={handleSubmit} className="form-grid">
                <div>
                    <p></p>
                </div>
                <div className='form-grid'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Enter title...'/>
                </div>
                <div className='form-grid'>
                    <label>Content</label>
                    <input type='text' className='form-control' value={content} onChange={(event) => setContent(event.target.value)} placeholder='Enter content...'/>
                </div>
                <div className='form-grid'>
                    <label>Hints</label>
                    <input type='text' className='form-control' value={hints} onChange={(event) => setHints(event.target.value)} placeholder='Enter hints...'/>
                </div>
                <div className='form-grid'>
                    <label>Resources</label>
                    <input type='text' className='form-control' value={resources} onChange={(event) => setResources(event.target.value)} placeholder='Enter resources...'/>
                </div>
                <div className='form-grid'>
                    <label>Answer</label>
                    <input type='text' className='form-control' value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder='Enter answer ...'/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SubmissionForm