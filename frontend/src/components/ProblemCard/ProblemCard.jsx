import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';

const ProblemCard = ({problems}) => {

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

    let problemTitle = problems.filter(problem => {
            console.log(problem.title)
            return problem.title
    })

    function Card(props){
        return(
            <div className="card">
                <div className="card_body">
                    <img src={props.img} className='card_image'/>
                    <h2 className="card_title">{props.title}</h2>
                    <p className="card_details">{props.description}</p>
                </div>
                <button className="card_btn">View Problem</button>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <h3>Problem Title Cards</h3>
            {problems.map(() => {
                return (
                    <Card 
                img="images/math-equation.jpg"
                title='The Moon'
                description="You will need marshmellows"
            />
                )
            })}

            {/* <button onClick={() => setProblemCard('1')}>Math 1</button>
            <button onClick={() => setProblemCard('2')}>Math 2</button>
            <button onClick={() => setProblemCard('3')}>Math 3</button> */}
        </div>
    )
}

export default ProblemCard