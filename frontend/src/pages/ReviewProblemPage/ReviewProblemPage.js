import React from 'react'
import axios from 'axios'
import ProblemsToReview from '../../components/ProblemsToReview/ProblemsToReview';

const ReviewProblemPage = ({problems}) => {

  let submittedProblems = problems.filter(problem => problem.live_status == false)
  // console.log(submittedProblems)

  return (
    <div>
        <h1 className='submitted-head'>Submitted Problems</h1>
        <ProblemsToReview submittedProblems={submittedProblems} problems={problems}/>
    </div>
  )
}

export default ReviewProblemPage