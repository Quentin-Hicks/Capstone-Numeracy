import "./SubmissionPage.css"
import SubmissionForm from "../../components/SubmissionForm/SubmissionForm";
import React from "react";

const SubmissionPage = ({createProblem}) => {

    return (
        <>
            <SubmissionForm createProblem={createProblem}/>
        </>
    )
}

export default SubmissionPage