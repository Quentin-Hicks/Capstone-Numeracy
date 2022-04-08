import "./ProblemCard.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";

const ProblemCard = () => {

    const [problem, setProblem] = useState([])

    useEffect(()=> {
        getAllProblems();
    }, [])

    async function getAllProblems(){
        let response = await axios.get('http://127.0.0.1:8000/api/problems/');
        console.log(response.data)
        setProblem(response.data);
  }

    return (
        <>
            <h3>Problem Title Cards</h3>
            {/* <button onClick={() => setProblem('calculus')}>Math 1</button>
            <button onClick={() => setProblem('algebra')}>Math 2</button>
            <button onClick={() => setProblem('geometry')}>Math 3</button> */}
        </>
    )
}

export default ProblemCard