import "./CapstoneHomePage.css"
import React from "react";

const CapstoneHomePage = () => {


    return (
        <>
            <head>
                <title>Capstone - Nume</title>
            </head>

            <body>
                <header className="header">
                    <div className="container">
                        <div>
                            <h1>An App For Numeracy</h1>
                            <p>
                                We're all about the numbers.
                                Build your mathematical
                                ability and see the world
                                in a different light. Let's
                                conquer the fear of math, together.
                            </p>
                        </div>
                        <img src="images/math-bracket.svg" alt=""/>
                    </div>
                </header>

                <section className="boxes">
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
                            <h2><i className="icon"></i>
                            Technology</h2>
                            <p>
                            Django, Django REST Framework,
                            MySQL, Postman, Git, GitHub

                            </p>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default CapstoneHomePage