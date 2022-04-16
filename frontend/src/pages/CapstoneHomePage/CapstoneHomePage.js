import "./CapstoneHomePage.css"
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Modal from "../../components/Modal/Modal";
import ControlledInputs from "../../components/ControlledInputs/ControlledInputs";

const CapstoneHomePage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [title, setTitle] = useState('hello')
    const [body, setBody] = useState('my body is chocolate')

    return (
        
        <div>
            
        </div>
    )
}

export default CapstoneHomePage