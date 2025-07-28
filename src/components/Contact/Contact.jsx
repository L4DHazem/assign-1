
import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Contact() {
    return <>

        <Navbar />

        <div className="container my-5">

            <h2 className='fw-bold fs-1 text-center'>Contact</h2>

            <form className="w-50 mx-auto p-2">

                <label htmlFor="name" className="form-label">userName</label>

                <input type="text" className="form-control mb-3" id="name" />

                <label htmlFor="age" className="form-label">userAge</label>

                <input type="number" className="form-control mb-3" id="age" />

                <label htmlFor="email" className="form-label">userEmail</label>

                <input type="email" className="form-control mb-3" id="email" />

                <label htmlFor="password" className="form-label">userPassword</label>

                <input type="password" className="form-control mb-4" id="password" />

                <button type="submit">send Message</button>

            </form>

        </div>

        <Footer />


    </>

}
