import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import "./Footer.css"


export default class Footer extends Component {
    render() {

        return (
            <div className="footer">
                <div className="container-footer">
                    <div>
                        <div className='col-footer'>
                            <h5>Services</h5>
                            <ul>
                                <li> <Link to="/marriage" style={{ textDecoration: 'none' }}> Hochzeit</Link></li>
                                <li> <Link to="/applicants" style={{ textDecoration: 'none' }}>Bewerbung </Link></li>
                                <li> <Link to="/business" style={{ textDecoration: 'none' }}>Messe/Firmenkunden</Link></li>
                                <li> <Link to="/portrait" style={{ textDecoration: 'none' }}>Familien- & Freundschaftsbilder</Link></li>
                                <li> <Link to="/akt" style={{ textDecoration: 'none' }}>Aktportrait</Link></li>
                            </ul>
                        </div>
                        <div className='col-footer'>
                            <h5>Contact Information</h5>
                            <p class="address">Fotostudio Sonnenschein • Strreeet ABC • Cittttiii • Phone + mail
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>insert Map / iframe</p>
                        {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099"
                        class="map-frame"
                        frameborder="0"
                        style="border:0"
                        allowfullscreen
                    ></iframe> */}

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.1904597994484!2d9.163894019748904!3d48.686210252891065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c2afe6d73f65%3A0x67137b63a5807265!2sFotostudio%20Sonnenschein!5e0!3m2!1sde!2sde!4v1639758256433!5m2!1sde!2sde" 
                    width="400" 
                    height="300"
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"></iframe> */}
                    </div>
                </div>
            </div>
        )
    }
}