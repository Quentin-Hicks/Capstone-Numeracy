import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';

const ProblemCard = (props) => {

    const [viewProblem, setViewProblem] = useState()

    function handleView(event){
        event.preventDefault()
        console.log('this is a problem')
    }

    // useEffect(() =>{
    //     console.log('numbers')
    //     console.log(problemCard)
    //     generateData()
    // }, [problemCard])

    // function generateData(){
    //     let problem = problems.map(problem => {
    //         return problem
    //     })
    //     console.log(problem)
    // }

    // function Card(props){
    //     return(
    //         <div className="card">
    //             <div className="card_body">
    //                 <img src={props.img} className='card_image'/>
    //                 <h2 className="card_title">{props.title}</h2>
    //                 <p className="card_details">{props.content}</p>
    //             </div>
    //             <button className="card_btn">View</button>
    //         </div>
    //     )
    // }

    return (
        <div className="wrapper">
            {props.problems.map((problem) => {
                return (
                    <div className="card" key={problem.id}>
                        <div className="card_body">
                            {/* Reminder: remove img src element */}
                            <img src="images/math-equation.jpg" className='card_image'/>
                            <h2 className="card_title">{problem.title}</h2>
                            <p className="card_details">{problem.content}</p>
                        </div>
                        <button className="card_btn" onClick={handleView}>View</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProblemCard