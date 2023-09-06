import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
function Navbar() {
    return (
        <div className="container-fluid cont1">
            <div className="row" >
                <motion.div className="col-sm-7" whileHover={{ scale: 1 }}>
                    <img src="images/learniq-logo.png" height="55px" width="55px" className="imgg" />
                    <img src="images/learniqtext.png" height="30px" width="140px"></img>
                </motion.div>
                <div className="col-sm-5">
                    <nav className="navbar" >
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" >Home</a></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link"  >About Us</a></li>
                        </ul>
                        <ul className="navbar-nav">
                            <Link to="/Quiz" className="nav-link">Quiz</Link>
                        </ul>
                        <ul className="navbar-nav">
                            <Link to="/Dashboard" className="nav-link">Dashboard</Link>
                        </ul>
                        <button type="button" className="btn btn-outline-success"><span
                        >Logout</span></button>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar