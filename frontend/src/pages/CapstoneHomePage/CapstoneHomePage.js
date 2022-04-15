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
        
        // <div>
        //     <h2>Add a New Blog</h2>
        //     <form>
        //         <label>Blog Title:</label>
        //         <input 
        //         type="text"
        //         required
        //         value={title}
        //         onChange={(e) => setTitle(e.target.value)}
        //         />
        //         <label>Blog Body:</label>
        //         <textarea 
        //             required
        //             value={body}
        //             onChange={(e) => setBody(e.target.value)}>
        //         </textarea>
        //         <label>Blog Author</label>
        //         <input 
        //         type="text"
        //         required
        //         />
        //         <button>Add Blog</button>
        //         <p>{title}</p>
        //         <p>{body}</p>
        //     </form>
        // </div>

        // NOTE: Do not erase Modal code below!!!!!
        <div>
            <h1>What's your Modal?</h1>
            {/* <div className='button_wrap' onClick={() => console.log('clicked')}>
                <h3>Hello Modal</h3>
                <button onClick={() => setIsOpen(true)}>Show Modal</button>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    Modal Disaster
                </Modal>

                <div className='other'>Other Content</div>
            </div> */}
        </div>
    )
}

export default CapstoneHomePage