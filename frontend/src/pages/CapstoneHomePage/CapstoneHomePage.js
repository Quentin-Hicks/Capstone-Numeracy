import "./CapstoneHomePage.css"
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CapstoneHomePage = () => {


    return (
        <>
            <Link to="/collection" style={{ textDecoration: "none", color: "black" }}>
                <h1>Capstone Home Page</h1>
            </Link>
        </>
    )
}

export default CapstoneHomePage