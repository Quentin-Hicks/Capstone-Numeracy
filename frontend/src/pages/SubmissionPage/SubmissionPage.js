import "./SubmissionPage.css"
import SubmissionForm from "../../components/SubmissionForm/SubmissionForm";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SubmissionPage = () => {


    return (
        <>
            <h1>Submission Page</h1>
            <SubmissionForm />
        </>
    )
}

export default SubmissionPage