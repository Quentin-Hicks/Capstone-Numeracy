// General Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage"
import ProblemPage from "./pages/ProblemPage/ProblemPage"
import SubmmissionPage from "./pages/SubmissionPage/SubmissionPage"
import CapstoneHomePage from "./pages/CapstoneHomePage/CapstoneHomePage";
import ReviewProblemPage from "./pages/ReviewProblemPage/ReviewProblemPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar"; // implement css to CapstoneNavBar
import CapstoneNavBar from "./components/CapstoneNavBar/CapstoneNavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {


  const [problems, setProblems] = useState([])

    useEffect(()=> {
        getAllProblems();
    }, [])

    async function getAllProblems(){
        let response = await axios.get('http://127.0.0.1:8000/api/problems/');
        // console.log(response.data)
        setProblems(response.data);
    }

    async function createProblem(newProblem){
      let response = await axios.post('http://127.0.0.1:8000/api/problems/', newProblem)
      // console.log(response.data)
    }

  return (
        <div> 
        <CapstoneNavBar />
        <Routes>
            <Route path="/" element={<CapstoneHomePage />} />
            <Route path="collection" element={<CollectionPage problems={problems}/>} />
            <Route path="submission" element={<SubmmissionPage createProblem={createProblem}/>}/>
            <Route path={`/problem/:id`} element={<ProblemPage problems={problems}/>} />
            <Route path={"admin/review"} element={<ReviewProblemPage problems={problems}/>}/>
            
          {/* <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
        <Footer />
      </div>
  )
}

export default App