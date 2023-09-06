import React from 'react'
import './Lecturecss.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Lecturenew() {
    return (
        < >
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <div className="wrapper">
                            <div className="searchBar">
                                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" style={{ color: 'whitesmoke' }} />
                                <Link to='/Lectureyoutube'> <motion.button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" whileHover={{ scale: 1.5 }}>
                                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24"><path fill="whitesmoke" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </svg>
                                </motion.button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <motion.div className="row" whileHover={{ scale: 1.1 }}>
                                <Link to='/Lectureyoutube'> <img src="https://img.freepik.com/premium-psd/business-youtube-thumbnail-design-template_475351-263.jpg?w=2000" style={{ width: '350px', height: '225px', padding: '5px', borderRadius: '15px' }}></img></Link>
                            </motion.div>
                            <div className="row" >
                                <Link to='/Lectureyoutube'><p style={{ color: 'whitesmoke', fontWeight: 'bolder' }} className="pi">Lorem ipsum dolor sit amet consectetur</p></Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <motion.div className="row" whileHover={{ scale: 1.1 }}>
                                <Link to='/Lectureyoutube'> <img src="https://img.freepik.com/premium-psd/business-youtube-thumbnail-design-template_475351-263.jpg?w=2000" style={{ width: '350px', height: '225px', padding: '5px', borderRadius: '15px' }}></img></Link>

                            </motion.div>
                            <div className="row" >
                                <Link to='/Lectureyoutube'><p style={{ color: 'whitesmoke', fontWeight: 'bolder' }} className="pi">Lorem ipsum dolor sit amet consectetur</p></Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <motion.div className="row" whileHover={{ scale: 1.1 }}>
                                <Link to='/Lectureyoutube'> <img src="https://img.freepik.com/premium-psd/business-youtube-thumbnail-design-template_475351-263.jpg?w=2000" style={{ width: '350px', height: '225px', padding: '5px', borderRadius: '15px' }}></img></Link>

                            </motion.div>
                            <div className="row">
                                <Link to='/Lectureyoutube'><p style={{ color: 'whitesmoke', fontWeight: 'bolder' }} className="pi">Lorem ipsum dolor sit amet consectetur</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}
