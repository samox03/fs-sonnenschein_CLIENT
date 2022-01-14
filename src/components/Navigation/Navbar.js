//dependencies
import React, { Component } from 'react';
import { Routes, Route, Redirect, Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";

//Bootstrap
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
//import 'bootstrap/dist/css/bootstrap.min.css'



export default class NavBar extends Component {
    render() {
        return (

            // <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            //     <div class="uk-navbar-left">
            //     <Link to="" className=" uk-navbar-item uk-logo">Fotostudio Sonnenschein</Link>
            //         <ul class="uk-navbar-nav">
            //             <li> <Link to="/marriage" className="uk-parent uk-navbar-right">Hochzeit</Link></li>
            //             <li> <Link to="/portrait" className="uk-parent uk-navbar-right">Familie/Portrait</Link></li>
            //             <li> <Link to="/akt" className="uk-parent uk-navbar-right">Akt</Link></li>
            //             <li> <Link to="/applicants" className="uk-parent uk-navbar-right">Pass/Bewebung</Link></li>
            //             <li> <Link to="/business" className="uk-parent uk-navbar-right">Veranstaltungen/Messe</Link></li>
            //         </ul>
            //     </div>
            // </nav>



            // <nav class="uk-navbar-container uk-margin" uk-navbar>
            //     <div class="uk-navbar-center">

            //         <div class="uk-navbar-center-left">
            //             <div>
            //                 <ul class="uk-navbar-nav">
            //                     <li> <Link to="/marriage" className="uk-parent uk-navbar-right">Hochzeit</Link></li>
            //                     <li> <Link to="/portrait" className="uk-parent uk-navbar-right">Familie/Portrait</Link></li>
            //                     <li> <Link to="/akt" className="uk-parent uk-navbar-right">Akt</Link></li>
            //                 </ul>
            //             </div>
            //         </div>
            //         <Link to="" className=" uk-navbar-item uk-logo">Fotostudio Sonnenschein</Link>
            //         <div class="uk-navbar-center-right">
            //             <div>
            //                 <ul class="uk-navbar-nav">
            //                     <li> <Link to="/applicants" className="uk-parent uk-navbar-right">Pass/Bewebung</Link></li>
            //                     <li> <Link to="/business" className="uk-parent uk-navbar-right">Veranstaltungen/Messe</Link></li>
            //                 </ul>
            //             </div>
            //         </div>

            //     </div>
            // </nav>


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                     <Link to="" className="navbar-brand">Fotostudio Sonnenschein</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">

                            <Link to="/marriage" className="nav-link">Hochzeit</Link>
                            <Link to="/portrait" className="nav-link">Familie/Portrait</Link>
                            <Link to="/akt" className="nav-link">Akt</Link>
                            <Link to="/applicants" className="nav-link">Pass/Bewerbung</Link>
                            <Link to="/business" className="nav-link">Veranstaltungen/Messe</Link>
                        </div>
                    </div>
                </div>
            </nav>




        )
    }
}