import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {

    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mepkfvp',
                'template_rq4q63a',
                form.current,
                'GATJL6pg8Bq7LtTPK'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (error) => {
                    console.error(error)
                    alert('Failed to send the message, please try again')
                }
            )
        e.target.reset();
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious on
                        challenging projects. However, if you have other request or question,
                        don't hesitate to contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name"
                                        type="text"
                                        name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[9.040691, 38.708838]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[9.040691, 38.708838]}>
                            <Popup>Elias lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact