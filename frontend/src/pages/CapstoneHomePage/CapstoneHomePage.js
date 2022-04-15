import "./CapstoneHomePage.css"
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Modal from "../../components/Modal/Modal";

const CapstoneHomePage = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h1>What's your Modal?</h1>
            <div className='button_wrap'>
        <h3>Hello Modal</h3>
        <button onClick={() => setIsOpen(true)}>Show Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Modal Disaster
        </Modal>

        <div className='other'>Other Content</div>
    </div>
        </div>
    )
}

export default CapstoneHomePage