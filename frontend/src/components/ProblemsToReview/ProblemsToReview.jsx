import "./ProblemsToReview.css"
import React from 'react'

const ProblemsToReview = ({submittedProblems}) => {

    console.log(submittedProblems)

    function problemCardData(){
        return (
            <div className="wrapper">
                {/* <h1>Collection Page</h1> */}
                {submittedProblems.map((problem) => {
                    return (
                            <div className="card" key={problem.id}>
                                <div className="card_body">
                                    {/* Reminder: remove img src element */}
                                    {/* <img src="images/math-equation.jpg" className='card_image'/> */}
                                    <h2 className="card_title">{problem.title}</h2>
                                    <b className="card_details">{problem.content}</b>
                                </div>
                                <button className="card_btn" >View</button>
                            </div>
                    )
                })}
            </div>
        )
    }
  return (
    <div>
        {problemCardData()}
    </div>

  )
}

export default ProblemsToReview