import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ReviewProblemPage = () => {

  async function createProblem(newProblem){
        let response = await axios.post('http://127.0.0.1:8000/api/problems/', newProblem)
        console.log(response.data)
        // await getAllProblems()
  }

  return (
    <div>
        <h1>ReviewProblemPage</h1>
    </div>
  )
}

export default ReviewProblemPage