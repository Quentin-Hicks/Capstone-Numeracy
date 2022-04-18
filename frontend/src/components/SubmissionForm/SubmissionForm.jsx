import "./SubmissionForm.css"
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
            resources: resources,
            answer: answer,
        }

        console.log(newSubmission)
        createProblem(newSubmission)  
        // here we call our function we passed down as props, 
        // it will take our newSubmission value and pass it into our 
        // function in app.js
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-layout">
            <h1 className="form-head">Submission</h1>
                <div>
                    <label className="sbt-label">Title</label>
                    <textarea
                    className='form-field'
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder='Enter title...' />
                </div>
                <div>
                    <label className="sbt-label">Content</label>
                    <textarea
                    className='form-field'
                    name="content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder='Enter content...' />
                </div>
                <div>
                    <label className="sbt-label">Hints</label>
                    <textarea
                    className='form-field'
                    name="hints"
                    value={hints}
                    onChange={(event) => setHints(event.target.value)}
                    placeholder='Enter hints...' />
                </div>
                <div>
                    <label className="sbt-label">Resources</label>
                    <textarea
                    className='form-field'
                    name="resources"
                    value={resources}
                    onChange={(event) => setResources(event.target.value)}
                    placeholder='Enter resources...' />
                </div>
                <div>
                    <label className="sbt-label">Answer</label>
                    <input type='text'
                    className='form-field'
                    name="answer"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder='Enter answer ...' />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default SubmissionForm