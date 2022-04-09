import "./CollectionPage.css"
import ProblemCard from "../../components/ProblemCard/ProblemCard";
import React from "react";
import { useEffect, useState } from "react";

const CollectionPage = ({problems}) => {


    return (
        <>
            <h1>Collection Page</h1>
            <ProblemCard 
                title='Card Title'
                imageUrl='/images/small-plane.jpg'
                body='this is a plane'
                // problems={problems}
            />
        </>
    )
}

export default CollectionPage