import "./ProblemDetails.css"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"


const ProblemDetails = (props) => {

    useEffect(()=>{
        getProblemById(id)
    }, [])

    const {id} = useParams()

    const [activeProblem, setActiveProblem] = useState({})

    async function getProblemById(problemID){
      let response = await axios.get(`http://127.0.0.1:8000/api/problems/${problemID}/`)
      console.log(response.data)
      setActiveProblem(response.data)
    }

    return (
        <div>
           <h1>Here's a problem</h1>
           <p>{activeProblem.title}</p>
           <p>{activeProblem.content}</p>
           <p>Hint: {activeProblem.hints}</p>
           <div>
            <p>Resources: {activeProblem.resources}</p>
           </div>
           <p>{activeProblem.answer}</p>
        </div>
    )
}

export default ProblemDetails