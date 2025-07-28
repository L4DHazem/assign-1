import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function About() {
    return <>

        <Navbar />

        <div className="about">

            <div className="container">

                <div className="text d-flex justify-content-center align-items-center text-center text-white">

                    <h2 className="my-auto fs-1 fw-bold">ABOUT COMPONENT</h2>

                </div>

                <div className="pargraph d-flex justify-content-center align-items-center text-white gap-3 p-5">

                    <p>Freelancer is a free bootstrap theme created by Route. The<br/> download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free bootstrap theme created by Route. The<br/> download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

            </div>

        </div>

        <Footer />


    </>


}
