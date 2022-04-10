import "./ProblemCard.css"
// REMINDER: May need to import display component
// to pass down state variable
import ProblemDislpay from "../ProblemDisplay/ProblemDisplay";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ProblemCard = ({problems}) => {

    const [problemData, setProblemData] = useState()

    useEffect(() => {
        console.log(`problem changed`)
    }, [problemData], console.log(problemData))

    // console.log(problemData)


    // let problemTitle = arrayOfProblems.filter(problem => problem.title)
    // console.log('Problem Title', problemTitle)

    // console.log(problemData)

    // REMINDER: Need to create state variable and set function
    // to capture and save data from view click in order to
    // pass that data to the page using props

    // function handleView(event){
    //     event.preventDefault()
    //     setProblemData()
    // }

    function problemCardData(){
        return (
            <div className="wrapper">
                {/* <h1>Collection Page</h1> */}
                {problems.map((problem) => {
                    return (
                        // <Link to={`/problem/${problems.id}`} key={problem.id} style={{ textDecoration: "none", color: "black" }}>
                            <div className="card" key={problem.id}>
                                <div className="card_body">
                                    {/* Reminder: remove img src element */}
                                    <img src="images/math-equation.jpg" className='card_image'/>
                                    <h2 className="card_title">{problem.title}</h2>
                                    <p className="card_details">{problem.content}</p>
                                </div>
                                <button className="card_btn" onClick={() => setProblemData(problem)}>View</button>
                            </div>
                        // </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            {problemCardData()}
        </>
        // <div className="wrapper">
        //     {problems.map((problem) => {
        //         return (
        //             <Link to={`/problem/${problems.id}`} key={problem.id} style={{ textDecoration: "none", color: "black" }}>
        //                 <div className="card">
        //                     <div className="card_body">
        //                         {/* Reminder: remove img src element */}
        //                         <img src="images/math-equation.jpg" className='card_image'/>
        //                         <h2 className="card_title">{problem.title}</h2>
        //                         <p className="card_details">{problem.content}</p>
        //                     </div>
        //                     <button className="card_btn" onClick={handleView}>View</button>
        //                 </div>
        //             </Link>
        //         )
        //     })}
        // </div>
    )
}

export default ProblemCard