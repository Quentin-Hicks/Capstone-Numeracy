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
import Footer from "./components/Footer/Footer";
import ProblemCard from "./components/ProblemCard/ProblemCard"
import ProblemDisplay from "./components/ProblemDisplay/ProblemDisplay"
import SubmissionForm from "./components/SubmissionForm/SubmissionForm"
import CapstoneHomePage from "./pages/CapstoneHomePage/CapstoneHomePage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
