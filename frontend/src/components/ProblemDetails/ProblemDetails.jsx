import "./ProblemDetails.css"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"


const ProblemDetails = (props) => {

    const {id} = useParams()

    const [activeProblem, setActiveProblem] = useState({})
    const [showHint, setShowHint] = useState(false)
    const [showAnswer, setShowAnsewr] = useState(false)
    const [userInput, setUserInput] = useState('')

    useEffect(()=>{
        getProblemById(id)
        // console.log(userAnswer)
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        console.log(userInput)
    }

    async function getProblemById(problemID){
      let response = await axios.get(`http://127.0.0.1:8000/api/problems/${problemID}/`)
      console.log(response.data)
      setActiveProblem(response.data)
    }

    // let correctAnswer = activeProblem.answer
    // console.log(correctAnswer)

    // function getAnswer(a){
    //     setUserAnswer(a.target.value)
    //     console.warn(a.target.value)
    // }

    // debugger

    return (
        <div>
           <h1>Here's a problem</h1>
           <p>{activeProblem.title}</p>
           <p>{activeProblem.content}</p>
           <button onClick={() => setShowHint(!showHint)}>Hint</button>
           <div>
               {
                   showHint?<p>{activeProblem.hints}</p>:null
               }
           </div>
           <p>Resources: {activeProblem.resources}</p>
           <form onSubmit={handleSubmit}>
               <div>
                   {/* <h3></h3> */}
                   <input type="text" onChange={(e) => setUserInput(e.target.value)} placeholder='Enter answer here...'/>
                   <button type="submit">Submit Answer</button>
               </div>
           </form>
           <button onClick={() => setShowAnsewr(!showAnswer)}>Show Answer</button>
           <div>
               {
                   showAnswer?<p>{activeProblem.answer}</p>:null
               }
           </div>
        </div>
    )
}

export default ProblemDetails