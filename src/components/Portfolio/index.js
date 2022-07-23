import React from 'react'
//import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import MyPhoto from './Logo/DegreeColor.png'
//import LogoElias from './Logo/My Photo b&w.png'

function Portfolio() {
    return (
        <>
            {/* <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br />I'm<img src={LogoTitle} alt="developer" />
                        lias <br />
                        Web developer
                    </h1>
                    <h2>Frontend Developer | React Expert </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    <Link to="/contact" className="flat-button-2">DOWNLOAD CV</Link>
                </div> */}
            <div className="logo-container">
                <img
                    className="solid-logo"
                    src={MyPhoto}
                    alt="React,  Developer"
                />
            </div>
            {/* </div> */}
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio