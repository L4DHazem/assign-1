import React from 'react'

import './Footer.css'


export default function Footer() {
    return <>

        <div className="Footer1">

            <div className="container d-flex justify-content-between align-items-center flex-wrap">

                <div className="location text-white p-3">

                    <h5 className='fw-bold'>LOCATION</h5>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                <div className="icon text-center text-white ">

                    <h5>AROUND THE WEB</h5>

                    <div className="d-flex gap-3 justify-content-center flex-wrap mt-3">

                        <div className="icon-circle bg-facebook">

                            <i className="fab fa-facebook-f fs-5" />

                        </div>

                        <div className="icon-circle bg-instagram">

                            <i className="fab fa-instagram fs-5" />

                        </div>

                        <div className="icon-circle bg-twitter">

                            <i className="fab fa-twitter fs-5" />

                        </div>
                        <div className="icon-circle bg-youtube">

                            <i className="fab fa-youtube fs-5" />

                        </div>

                    </div>
                    
                </div>

                <div className="freelancer text-white text-center pt-3 ">

                    <h5>ABOUT FREELANCER</h5>
                    <p>Freelance is a free to use, licensed Bootstrap theme<br /> created by Route</p>
                </div>



            </div>

        </div>

        <div className="Footer2 text-white text-center py-3">

            <p>Copyright &copy; Your Website 2021</p>
        </div>

    </>;
}
