import "./SubmissionPage.css"
import SubmissionForm from "../../components/SubmissionForm/SubmissionForm";
import React from "react";

const SubmissionPage = ({createProblem}) => {

    return (
        <>
            <h1></h1>
            <SubmissionForm createProblem={createProblem}/>
        </>
    )
}

export default SubmissionPage