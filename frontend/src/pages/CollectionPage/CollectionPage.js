import "./CollectionPage.css"
import ProblemCard from "../../components/ProblemCard/ProblemCard";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CollectionPage = ({problems}) => {


    return (
        <>
            <h1>Collection Page</h1>
            <ProblemCard problems={problems}/>
        </>
    )
}

export default CollectionPage