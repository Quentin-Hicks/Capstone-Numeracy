import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';

const ProblemCard = () => {

    // const [problemCard, setProblemCard] = useState('1')

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

    // let problemTitle = problems.filter(problem => {
    //     if(problem){
    //         console.log(problem.title)
    //     }
    // })

    function Card(props){
        return(
            <div className="card">
                <div className="card_body">
                    <img src="images/small-plane.jpg" />
                    <h2 className="card_title">The Moon</h2>
                    <p className="card_details">You will need marshmellows</p>
                </div>
                <button className="card_btn">View Card</button>
            </div>
        )
    }

    return (
        <div>
            <h3>Problem Title Cards</h3>
            <Card />

            {/* <button onClick={() => setProblemCard('1')}>Math 1</button>
            <button onClick={() => setProblemCard('2')}>Math 2</button>
            <button onClick={() => setProblemCard('3')}>Math 3</button> */}
        </div>
    )
}

export default ProblemCard