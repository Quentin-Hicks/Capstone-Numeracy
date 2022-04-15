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
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <p><input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /></p>
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author</label>
                <input 
                type="text"
                required
                />
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    )
}

export default CapstoneHomePage