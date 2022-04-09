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
                    <img src={props.img} />
                    <h2 className="card_title">{props.title}</h2>
                    <p className="card_details">{props.description}</p>
                </div>
                <button className="card_btn">View Card</button>
            </div>
        )
    }

    return (
        <div>
            <h3>Problem Title Cards</h3>
            <Card 
                img="images/small-plane.jpg"
                title="The Moon"
                description="You will need marshmellows"
            />
            <Card 
                img="images/small-plane.jpg"
                title="The Moon"
                description="You will need marshmellows"
            />

            {/* <button onClick={() => setProblemCard('1')}>Math 1</button>
            <button onClick={() => setProblemCard('2')}>Math 2</button>
            <button onClick={() => setProblemCard('3')}>Math 3</button> */}
        </div>
    )
}

export default ProblemCard