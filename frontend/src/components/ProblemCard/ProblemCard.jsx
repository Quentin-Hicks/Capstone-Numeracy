import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';

function ProblemCard(title, imageUrl, body){

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

    return (
        <div>
            <h3>Problem Title Cards</h3>
            <div className="card-container">
                <div className="image-container">
                    <img src='frontend\public\images\icons8-youtube-96.png' alt='' />
                </div>
            </div>
            {/* <button onClick={() => setProblemCard('1')}>Math 1</button>
            <button onClick={() => setProblemCard('2')}>Math 2</button>
            <button onClick={() => setProblemCard('3')}>Math 3</button> */}
        </div>
    )
}

export default ProblemCard