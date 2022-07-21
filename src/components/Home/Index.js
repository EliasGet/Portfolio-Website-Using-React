import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from './Logo/logo-e.png'
import LogoElias from './Logo/My Photo b&w.png'

function Home() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br />I'm<img src={LogoTitle} alt="deceloper" />
                        lias <br />
                        Web developer
                    </h1>
                    <h2>Frontend Developer | React Expert </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className="logo-container">
                    <img
                        className="solid-logo"
                        src={LogoElias}
                        alt="React,  Developer"
                    />
                </div>
            </div>
        </>
    )
}

export default Home