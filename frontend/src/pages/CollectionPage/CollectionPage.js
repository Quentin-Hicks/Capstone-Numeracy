import "./CollectionPage.css"
import ProblemCard from "../../components/ProblemCard/ProblemCard";
import React from "react";
import { useEffect, useState } from "react";

const CollectionPage = ({problems}) => {


    return (
        <div>
            {/* <h1>Collection Page</h1> */}
            <ProblemCard problems={problems} />
        </div>
    )
}

export default CollectionPage