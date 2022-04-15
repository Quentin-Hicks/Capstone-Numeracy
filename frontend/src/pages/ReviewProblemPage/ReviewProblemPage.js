import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ReviewProblemPage = ({problems}) => {

  let problemsToReview = problems.filter(problem => problem.live_status == false)
  console.log(problemsToReview)

  async function updateProblem(){
    let response = await axios.put('http://127.0.0.1:8000/api/problems/2/')
    console.log(response.data)
  }

  return (
    <div>
        <h1>ReviewProblemPage</h1>
    </div>
  )
}

export default ReviewProblemPage