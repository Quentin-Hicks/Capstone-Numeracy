import "./CollectionPage.css"
import ProblemCard from "../../components/ProblemCard/ProblemCard";
import React from "react";
import { render } from "react-dom"

const CollectionPage = ({problems}) => {


    return (
        <div>
            {/* <h1>Collection Page</h1> */}
            <ProblemCard problems={problems} />
        </div>
    )
}

export default CollectionPage