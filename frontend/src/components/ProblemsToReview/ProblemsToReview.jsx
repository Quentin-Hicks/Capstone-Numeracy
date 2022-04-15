import "./ProblemsToReview.css"
import React, { useEffect, useState } from 'react'
import Modal from "../../components/Modal/Modal";

const ProblemsToReview = ({submittedProblems}) => {

    const [isOpen, setIsOpen] = useState(false)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [hints, setHints] = useState('')
    const [resources, setResources] = useState('')
    const [answer, setAnswer] = useState('')
    const [liveStatus, setLiveStatus] = useState()

    function handleView(e){
        e.preventDefault()
        
    }

    function problemInReview(title, content, hints, resources, answer, liveStatus){
        setTitle(title)
        setContent(content)
        setHints(hints)
        setResources(resources)
        setAnswer(answer)
        setLiveStatus(liveStatus)
    }

    console.log(submittedProblems)


    function problemCardData(){
        return (
            <div className="wrapper">
                {/* <h1>Collection Page</h1> */}
                {submittedProblems.map((problem) => {
                    return (
                        <div className="card" key={problem.id} 
                        onClick={() => problemInReview(
                            problem.title,
                            problem.content,
                            problem.hints,
                            problem.resources,
                            problem.answer,
                            problem.liveStatus
                        )}>
                            <div className="card_body">
                                {/* Reminder: remove img src element */}
                                {/* <img src="images/math-equation.jpg" className='card_image'/> */}
                                <h2 className="card_title">{problem.title}</h2>
                                <b className="card_details">{problem.content}</b>
                            </div>
                            <button onClick={() => setIsOpen(true)} className="card_btn">View</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {problemCardData()}

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Modal Disaster
                <b>Example Text In Modal</b>
                <p>{title}</p>
                <p>{content}</p>
                <p>{hints}</p>
                <p>{resources}</p>
                <p>{answer}</p>
                <p>{liveStatus}</p>
            </Modal>
        </div>

    )
}

export default ProblemsToReview