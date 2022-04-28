import React from "react";
import { Link } from "react-router-dom";
import "./CapstoneNavBar.css";

const CapstoneNavBar = () => {


    return (
        <div className="navbar">
          <div className="nav-container">
            <ul>
                <li className="brand">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="brand">
                    <Link to="/collection" style={{ textDecoration: "none", color: "black" }}>
                        <p>Problem Challenges</p>
                    </Link>
                </li>
                <li className="brand">
                    <Link to="/submission" style={{ textDecoration: "none", color: "black" }}>
                        <p>Submit A Problem</p>
                    </Link>
                </li>
                <li className="brand">
                    <Link to="/admin/review" style={{ textDecoration: "none", color: "black" }}>
                        <p>Review Submissions</p>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
    )
}

export default CapstoneNavBar