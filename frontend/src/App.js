// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios"
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage"
import ProblemPage from "./pages/ProblemPage/ProblemPage"
import SubmmissionPage from "./pages/SubmissionPage/SubmissionPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import CapstoneNavBar from "./components/CapstoneNavBar/CapstoneNavBar";
import Footer from "./components/Footer/Footer";
import ProblemCard from "./components/ProblemCard/ProblemCard"
import ProblemDisplay from "./components/ProblemDisplay/ProblemDisplay"
import SubmissionForm from "./components/SubmissionForm/SubmissionForm"
import CapstoneHomePage from "./pages/CapstoneHomePage/CapstoneHomePage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  // debugger

  const [problems, setProblems] = useState([])

    useEffect(()=> {
        getAllProblems();
    }, [])

    async function getAllProblems(){
        let response = await axios.get('http://127.0.0.1:8000/api/problems/');
        // console.log(response.data)
        setProblems(response.data);
  }

  return (
    <div>
      <CapstoneNavBar />
      {/* <Navbar /> */}
       <Routes>
          <Route path="/" element={<CapstoneHomePage />} />
          <Route path="/collection" element={<CollectionPage problems= {problems}/>} />
          {/* Reminder: need backticks for ProblemPage, `/problem/${problems.title}` */}
          <Route path="/problem" element={<ProblemPage />} />
          <Route path="/submission" element={<SubmmissionPage />} />
          
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
  );
}

export default App;
