import {
    faBootstrap,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>About Me</h1>
                    <p>
                        I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects. I have a bachelor’s degree
                        in Computer Science from HiLCoE School of Computer Science and Technology and
                        a certificate in the course Responsive Web Design from freecodecamp.org.
                    </p>
                    <p>
                        The way I see it, a person hiring me for a job will benefit in two ways.
                        Number one: my client will always get someone who delivers on time,
                        Second: I'm always available to my clients. Hence the term, Dependable
                        and Committed. Not only will I do the job, but I will also engage myself
                        in coming up with new solutions that can solve the project better.
                    </p>
                    <p>
                        I believe in open and frequent communication between my clients and me so that
                        everyone involved is always on the right page. I look forward to hearing from
                        you and can't wait till we work together.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color="#00d8ff" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faBootstrap} color="#8b12fd" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About