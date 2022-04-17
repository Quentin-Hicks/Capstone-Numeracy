import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ProblemCard = ({problems}) => {

    const [problemData, setProblemData] = useState()

    useEffect(() => {
        
    }, [problemData])


    let liveProblems = problems.filter(problem => problem.live_status == true)

    function problemCardData(){
        return (
            <div className="wrapper">
                {/* <h1>Collection Page</h1> */}
                {liveProblems.map((problem) => {
                    return (
                        <Link to={`/problem/${problem.id}`} key={problem.id} 
                            style={{ textDecoration: "none", color: "black" }}
                            >
                            <div className="card">
                                <div className="card_body">
                                    {/* Reminder: remove img src element */}
                                    {/* <img src="images/math-equation.jpg" className='card_image'/> */}
                                    <h2 className="card_title">{problem.title}</h2>
                                    {/* <p className="card_details">{problem.content}</p> */}
                                </div>
                                <button className="card_btn" onClick={() => setProblemData(problem)}>View</button>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <h1 className="overhead">Select Any Problem Below</h1>
            {problemCardData()}
        </div>
    )
}

export default ProblemCard