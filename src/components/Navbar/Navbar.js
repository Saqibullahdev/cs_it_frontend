import React from 'react';
import { Link } from 'react-router-dom';
import './Nabar.css';

export default function Navbar() {
    const clicked= (event)=>{
        event.currentTarget.classList.toggle('active');


    }
    return (
       <div className='maincontainer'>
         <nav className=" container navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid ">
                <Link className="navbar-brand" to='/'>
                    <div className='logodiv'>
                        <img src="https://res.cloudinary.com/devncode/image/upload/v1576589166/production_devncode/community/1576589156098.png" alt="logo" />
                    </div>
                </Link>
                {/* <Link className="navbar-brand computercelltitle" to='/'>
                    <p>COMPUTER CELL</p>
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " onClick={clicked} aria-current="page" to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/noticeboard'>
                                Noticeboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/Faqs'>
                                FAQ's
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/academics'>
                                Academics
                            </Link>
                        </li> */}
                      
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/gallery'>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/downloads'>
                                Downloads
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/society'>
                                Society
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/contact'>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={clicked} to='/admin'>
                                Admin Login
                            </Link>
                        </li>
                       
                    </ul>
                   
                </div>

                <Link className="navbar-brand lastlogo" to='/'>
                    <div className='logodiv'>
                        <img src="https://res.cloudinary.com/devncode/image/upload/v1576589166/production_devncode/community/1576589156098.png" alt="" />
                    </div>
                </Link>

                
                
                


            </div>
        </nav>
       </div>

    )
}
