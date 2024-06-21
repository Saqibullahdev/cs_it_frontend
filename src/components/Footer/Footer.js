import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='mainfooter'>


            <footer className="text-center text-lg-start ">


                <section className="">
                    <div className="container text-center text-md-start pt-4">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">

                                    Get in touch with us<br /> Department of CS&IT
                                </h6>
                                <p>
                                    New Academic Block,<br /> UET Peshawar,<br /> Peshawar University Campus.<br /> Tel: <br />Fax :
                                </p>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Pages</h6>

                                <ul className="navbar-nav me-auto ms-auto  mb-lg-0 footerlinks">
                                    <li className="nav-item">
                                        <Link className="nav-link " aria-current="page" to='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/noticeboard'>
                                            Noticeboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/Faqs'>
                                            FAQ's
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/downloads'>
                                            Downloads
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/gallery'>
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/society'>
                                            Society
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/contact'>
                                            Contact
                                        </Link>
                                    </li>


                                </ul>

                            </div>


                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contacts</h6>
                                <p>Fot Undergraduate Programs (CS/DS) </p>
                                <p>Email: </p>
                                <p>For Graduate (MS/PhD) Programs:</p>
                                <p>Email: </p>


                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Campus Map</h6>
                                <div >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13230.352798819893!2d71.46813143955077!3d34.00310970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9172ebe9aaad1%3A0x74de395b0ec3efb!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Peshawar.!5e0!3m2!1sen!2s!4v1677971462926!5m2!1sen!2s"
                                        width={300}
                                        height={300}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <div
                    className="text-center p-4"

                >
                    <p className='rightstext'>© CS&IT UET Peshawar 2022-2023.   All right reserved</p>
                    <p className='rightstext-2'>Developed by the Computer Cell Team: Armaghan Khan | Saqib Ullah | Wajid Khan</p>

                </div>

            </footer>



        </div>
    )
}
