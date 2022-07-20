import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoE from '../../assets/images/logo-e.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoE} alt="LogoE" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#8e8e8f" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#8e8e8f" />
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#8e8e8f" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#8e8e8f" />
                </NavLink>
            </nav>
            <li>
                <a
                    href="https://www.linkedin.com/in/elias-getachew-414a521b3/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/EliasGet"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

        </div>
    )
}

export default Sidebar