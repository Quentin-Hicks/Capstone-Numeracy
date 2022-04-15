import "./ProblemsToReview.css"
import React, { useEffect, useState } from 'react'
import Modal from "../../components/Modal/Modal";

const ProblemsToReview = ({submittedProblems}) => {

    const [isOpen, setIsOpen] = useState(false)

    // console.log(submittedProblems)

    function problemInReview(problem){
        console.log(problem)
    }

    function problemCardData(){
        return (
            <div className="wrapper">
                {/* <h1>Collection Page</h1> */}
                {submittedProblems.map((problem) => {
                    return (
                        <div className="card" key={problem.id} onClick={() => problemInReview(problem)}>
                            <div className="card_body">
                                {/* Reminder: remove img src element */}
                                {/* <img src="images/math-equation.jpg" className='card_image'/> */}
                                <h2 className="card_title">{problem.title}</h2>
                                <b className="card_details">{problem.content}</b>
                            </div>
                            <button onClick={() => setIsOpen(true)}className="card_btn">View</button>
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
                <textarea></textarea>
            </Modal>
        </div>

    )
}

export default ProblemsToReview