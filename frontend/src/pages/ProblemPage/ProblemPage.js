import "./ProblemPage.css"
import ProblemDislpay from "../../components/ProblemDisplay/ProblemDisplay";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProblemPage = () => {


    return (
        <>
            <h1>Problem Page</h1>
            <ProblemDislpay />
        </>
    )
}

export default ProblemPage