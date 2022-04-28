import "./ProblemDetails.css"
import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";
import axios from "axios"
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
        
    }, [])

    async function getProblemById(problemID){
        let response = await axios.get(`http://127.0.0.1:8000/api/problems/${problemID}/`)
        console.log(response.data)
        setActiveProblem(response.data)
      }

    function handleSubmit(event){
        event.preventDefault()
        isCorrect()
    }

    function isCorrect(){
        if(userInput == activeProblem.answer){

            console.log('Correct Answer: ', activeProblem.answer)

            activeProblem.correctAnswers++
            console.log(activeProblem.correctAnswers)

            updateData(activeProblem.correctAnswers, activeProblem.incorrectAnswers, activeProblem.hintsUsed)

            correctAnswerNotifcation()
    
        } else if(userInput != activeProblem.answer){

            console.log('Incorrect Answer')

            activeProblem.incorrectAnswers++
            console.log(activeProblem.incorrectAnswers)

            updateData(activeProblem.correctAnswers, activeProblem.incorrectAnswers, activeProblem.hintsUsed)

            wrongAnswerNotification()
        }
    }

    function hintShown(){

        console.log('here is your hint')

        setShowHint(!showHint)

        activeProblem.hintsUsed++
        console.log(activeProblem.hintsUsed)

        updateData(activeProblem.correctAnswers, activeProblem.incorrectAnswers, activeProblem.hintsUsed)
    }

    function updateData(numOfCorrect, numOfIncorrect, numOfHints){
        let problem = {
            title: activeProblem.title,
            content: activeProblem.content,
            hints: activeProblem.hints,
            answer: activeProblem.answer,
            resources: activeProblem.resources,
            live_status: activeProblem.liveStatus,
            correctAnswers: numOfCorrect,
            incorrectAnswers: numOfIncorrect,
            hintsUsed: numOfHints
        }
        updateProblem(problem, activeProblem.id)
    }

    async function updateProblem(problem, problemId){
        let response = await axios.put(`http://127.0.0.1:8000/api/problems/${problemId}/`, problem)
        // console.log(response.data)
    }

    function correctAnswerNotifcation() {
        toast.success('Correct!', {
            position: toast.POSITION.TOP_RIGHT,
            autoclose: 5000
        })
    }

    function wrongAnswerNotification() {
        toast.error('Wrong, please try again...', {
            position: toast.POSITION.TOP_RIGHT,
            autoclose: 5000
        })
    }

    function currentProblemView(){

        return (
            <>
                <header className="det-header">
                    <div className="det-container">
                        <div>
                            <h1>{activeProblem.title}</h1>
                        </div>
                    </div>
                </header>

                <section className="details">
                    <div className="det-container">
                        <div className="pbm-content">
                            <p>{activeProblem.content}</p>
                            <p>Resources:
                                <a href={`${activeProblem.resources}`}>
                                    Unit Conversion
                                </a>
                            </p>
                        </div>
                        <div className="btn-container">
                            <button className="pbm-btn" onClick={hintShown}>Hint</button>
                            <div className="pbm-hint">
                                {
                                    showHint?<p>{activeProblem.hints}</p>:null
                                }
                            </div>
                            <button className="pbm-btn" onClick={() => setShowAnsewr(!showAnswer)}>Show Answer</button>
                            <div className="pbm-ans">
                                {
                                    showAnswer?<p>{activeProblem.answer}</p>:null
                                }
                            </div>
                        </div>
                        <form className="pbm-form-container" onSubmit={handleSubmit}>
                            <div className="form-smt">
                                <input type="text" className="ans-input" onChange={(e) => setUserInput(e.target.value)} placeholder='Enter answer here...'/>
                                <button type="submit" className="smt-btn">Submit Answer</button>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
    }

    const data = [
        ["Label", "Numbers"],
        ["# of Correct Answers", activeProblem.correctAnswers],
        ["# of Incorrect Answers", activeProblem.incorrectAnswers],
        ["# of Times Hints Used", activeProblem.hintsUsed],
         // CSS-style declaration
    ]

    const options = {
        pieHole: 0.4,
        backgroundColor: '#333',
        // is3D: false,
    }

    return (
        <>
            {currentProblemView()}
            <div >
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
}

export default ProblemDetails