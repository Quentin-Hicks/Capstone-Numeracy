import React from 'react'
import axios from 'axios'
import ProblemsToReview from '../../components/ProblemsToReview/ProblemsToReview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ReviewProblemPage = ({problems}) => {

  let submittedProblems = problems.filter(problem => problem.live_status == false)
  // console.log(submittedProblems)

  async function updateProblem(problemID){
    let response = await axios.put(`http://127.0.0.1:8000/api/problems/${problemID}/`)
    console.log(response.data)
  }

  return (
    <div>
        <h1>ReviewProblemPage</h1>
        <ProblemsToReview submittedProblems={submittedProblems}/>
    </div>
  )
}

export default ReviewProblemPage