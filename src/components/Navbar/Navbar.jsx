import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return <>

        <nav className="navbar navbar-expand-lg my-nav">
            <div className="container">
                <NavLink className="navbar-brand text-white display-1 fw-bold" to="/Home">StartFrameWork</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto p-3 fs-5 fw-bold">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Portofolio">Portofolio</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact</ NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>


    </>

}
