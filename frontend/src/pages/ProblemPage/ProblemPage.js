import "./ProblemPage.css"

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProblemPage = ({problems}) => {

    const {id} = useParams()

    console.log(id)

    let filteredProblem = problems.filter(problem => problem.id == id)
    console.log(filteredProblem)

    

    return (
        <>
        <h2>
            Id is = { id }
        </h2>
        {/* <ProblemDetails /> */}
        </>
    )
}

export default ProblemPage