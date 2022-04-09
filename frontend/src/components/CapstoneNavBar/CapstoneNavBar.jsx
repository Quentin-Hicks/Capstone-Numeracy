import React from "react";
import { useContext } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "./CapstoneNavBar.css";

const CapstoneNavBar = () => {


    return (
        <div className="navbar">
          <ul>
            <li className="brand">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <p>Capstone Home Page</p>
                </Link>
            </li>
            <li className="brand">
                <Link to="/collection" style={{ textDecoration: "none", color: "black" }}>
                    <p>Collection Page</p>
                </Link>
            </li>
            <li className="brand">
                <Link to="/submission" style={{ textDecoration: "none", color: "black" }}>
                    <p>Submission Page</p>
                </Link>
            </li>
          </ul>
        </div>
    )
}

export default CapstoneNavBar