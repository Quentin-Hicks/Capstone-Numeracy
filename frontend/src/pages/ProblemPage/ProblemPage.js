import "./ProblemPage.css"
import ProblemDetails from "../../components/ProblemDetails/ProblemDetails";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProblemPage = (props) => {


    return (
        <div>
    
            <ProblemDetails />
        </div>
    )

}


export default ProblemPage