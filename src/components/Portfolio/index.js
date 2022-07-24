import React from 'react'

import './index.scss'
import Loader from 'react-loaders'
import MyPhoto from './Logo/DegreeColor.png'
import Degree from './Logo/Degree.jpg'


function Portfolio() {
    return (
        <>
            <div className="container">
                <div className="text-zone">
                    <h1>Computer Science Degree</h1>
                    <a href="/Degree.jpg"><img className='degree-logo' src={Degree} alt="Degree" /></a>
                    <img className='degree-logo' src={Degree} alt="Degree" />
                </div>
            </div>
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