import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';

const ProblemCard = ({problems}) => {

    const [problemCard, setProblemCard] = useState('1')

    useEffect(() =>{
        console.log('numbers')
        console.log(problemCard)
        generateData()
    }, [problemCard])

    function generateData(){
        let problem = problems.map(problem => {
            return problem
        })
        console.log(problem)
    }

    // let problemTitle = problems.filter(problem => {
    //     if(problem){
    //         console.log(problem.title)
    //     }
    // })

    return (
        <>
            <h3>Problem Title Cards</h3>
            <button onClick={() => setProblemCard('1')}>Math 1</button>
            <button onClick={() => setProblemCard('2')}>Math 2</button>
            <button onClick={() => setProblemCard('3')}>Math 3</button>
        </>
    )
}

export default ProblemCard