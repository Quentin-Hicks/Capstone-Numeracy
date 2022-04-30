import "./CapstoneHomePage.css"
import React from "react";

const CapstoneHomePage = () => {


    return (
        <div className="capstone">
            <div className="container">
                <div className="box">
                    <h1>Nume</h1>
                    <h4>
                        We're all about the numbers.
                        Build your mathematical
                        ability and see the world
                        in a different light. Let's
                        conquer the fear of math, together.
                    </h4>
                </div>
                {/* <img src="images/math-bracket.svg" alt=""/> */}
            </div>

            {/* <section className="boxes">
                <div className="container">
                    <div className="box">
                        <h2><i className="icon"></i>
                        Languages</h2>
                        <p>
                        Python, React.js, JavaScript,
                        HTML, CSS
                        </p>
                    </div>
                    <div className="box">
                        <h2><i className="fa-thin fa-gears"></i>
                        Technology</h2>
                        <p>
                        Django, Django REST Framework,
                        MySQL, Postman, Git, GitHub

                        </p>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default CapstoneHomePage