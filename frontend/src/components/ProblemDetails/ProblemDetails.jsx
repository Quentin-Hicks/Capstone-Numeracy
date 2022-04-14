import "./ProblemDetails.css"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"
import xtype from "xtypejs"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
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

    async function getProblemById(problemID){
        let response = await axios.get(`http://127.0.0.1:8000/api/problems/${problemID}/`)
        console.log(response.data)
        setActiveProblem(response.data)
      }

    function handleSubmit(event){
        event.preventDefault()
        // console.log(userInput)
        isCorrect()
    }

    function isCorrect(){
        console.log(activeProblem.answer)
        console.log(userInput)
        if(userInput == activeProblem.answer){
            console.log('correct')
            notify()
            // let correctAnswer = userInput
            // return correctAnswer
        } else {
            console.log('not correct')
        }
        // console.log(xtype(activeProblem.answer, 10))
        // console.log(xtype(userInput, 10))
    }

    // const CustomToast = ({closeToast}) => {
    //     return (
    //         <div>
    //             Something went wrong
    //             <button onClick={closeToast}>Close</button>
    //         </div>
    //     )
    // }

    // debugger
    function notify() {
        toast.success('Correct!', {
            position: toast.POSITION.TOP_RIGHT,
            autoclose: 5000
        })
    }
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