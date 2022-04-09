import "./SubmissionForm.css"
import React, { useState } from 'react';

const SubmissionForm = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [hints, setHints] = useState('')
    const [answer, setAnswer] = useState('')
    const [resources, setResources] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        // this keeps the page from refreshing
    }

    return (
        <>
            <h3>Submit A Math Problem</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Enter title...'/>
                </div>
                <div className='form-grid'>
                    <label>Content</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setContent(event.target.value)} placeholder='Enter content...'/>
                </div>
                <div className='form-grid'>
                    <label>Hints</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setHints(event.target.value)} placeholder='Enter hints...'/>
                </div>
                <div className='form-grid'>
                    <label>Resources</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setResources(event.target.value)} placeholder='Enter resources...'/>
                </div>
                <div className='form-grid'>
                    <label>Answer</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setAnswer(event.target.value)} placeholder='Enter answer...'/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SubmissionForm