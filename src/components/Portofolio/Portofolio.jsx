import React from 'react'
import './Portofolio.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import poert from './../../assets/poert1.png'
import port2 from './../../assets/port2.png'
import port3 from './../../assets/port3.png'



export default function Portofolio() {
    return <>

        <Navbar />


        <div className="portofolio">



            <h2 className=" text fs-1 fw-bold p-3 text-center">PORTFOLIO COMPONENT</h2>

            <div className="images ">

                <div className="container">

                    <div className="row g-5">

                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={poert} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>


                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={port2} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>


                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={port3} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>


                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={poert} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>


                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={port2} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>


                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">

                            <div className="portfolio-item">

                                <img src={port3} alt="house" className="img-fluid rounded-3" />

                                <div className="overlay">

                                    <i className="fa fa-plus fa-2x"></i>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

        <Footer />



    </>

}
