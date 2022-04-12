// General Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage"
import ProblemPage from "./pages/ProblemPage/ProblemPage"
import SubmmissionPage from "./pages/SubmissionPage/SubmissionPage"
import CapstoneHomePage from "./pages/CapstoneHomePage/CapstoneHomePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import CapstoneNavBar from "./components/CapstoneNavBar/CapstoneNavBar";
import Footer from "./components/Footer/Footer";
import ProblemCard from "./components/ProblemCard/ProblemCard"
import ProblemDisplay from "./components/ProblemDisplay/ProblemDisplay"
import SubmissionForm from "./components/SubmissionForm/SubmissionForm"


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  // debugger

  const [problems, setProblems] = useState([])

    useEffect(()=> {
        getAllProblems();
    }, [])

    // console.log(problems)

    async function getAllProblems(){
        let response = await axios.get('http://127.0.0.1:8000/api/problems/');
        // console.log(response.data)
        setProblems(response.data);
    }
    
    async function createProblem(newProblem){
      let response = await axios.post('http://127.0.0.1:8000/api/problems/', newProblem)
      // console.log(response.data)
      await getAllProblems()
    }

  return (
        <div> 
        <CapstoneNavBar />
        <Routes>
            <Route path="/" element={<CapstoneHomePage />} />
            <Route path="collection" element={<CollectionPage problems= {problems}/>} />
            {/* Reminder: need backticks for ProblemPage, `/problem/${problems.title}` */}
            <Route path="submission" element={<SubmmissionPage createProblem={createProblem}/>}/>
            {/* passing in our function so we can pull data to this level and save it */}
            <Route path={`/problem/:id`} element={<ProblemPage problems= {problems}/>} />
            
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App