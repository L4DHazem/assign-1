import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Footer from '../Footer/Footer'

import avatar from './../../assets/avataaars.svg'

export default function Home() {
    return <>

        <Navbar />

        <div className="Home">

        <div className="container">

            <div className="row">

                    <div className="col 12 d-flex flex-column justify-content-center align-items-center text-center text-white p-4">

                        <img src={avatar} alt="Avatar" />

                        <h2 className='mt-4'>START FRAMEWORK</h2>

                        <p>Graphic Artist - Web Designer - Illustrator</p>

                    </div>

                </div>

            </div>

        </div>

        <Footer />


    </>

}
