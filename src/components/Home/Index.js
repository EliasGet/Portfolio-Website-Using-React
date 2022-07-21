import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from './Logo/logo-e.png'

function Home() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hello there, <br />I'm<img src={LogoTitle} alt="deceloper" />
                        lias <br />
                        Web developer
                    </h1>
                    <h2>Frontend Developer | React Expert </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
        </>
    )
}

export default Home