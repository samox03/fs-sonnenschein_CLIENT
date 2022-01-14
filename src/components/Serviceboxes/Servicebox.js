import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import "./Servicebox.css";


export default class Serviceboxes extends Component {
    render() {

        return (
            <section className='uk-grid uk-grid-large service-box-wrapper uk-text-center uk-flex uk-flex-center uk-flex-middle' uk-grid>
                <div id="service-box" className='uk-width-1-3@m uk-grid-margin'>
                    <Link to="/portrait" style={{ textDecoration: 'none' }} className='uk-grid-item-match'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            {/* https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-family-member-fathers-day-wanicon-lineal-wanicon.png */}
                            <img className="img" src="https://img.icons8.com/ios/50/000000/portrait.png" width="35%" height="35%" alt="Icon XY" />
                            <h4>Familien- und Einzelportaits</h4>
                            <p>Oma samt Hund sind zu Besuch und selbst die große Tochter ist gekommen? Kommt vorbei und <strong> wir bringen die ganze Familie aufs Bild!</strong>  </p>
                        </div>
                    </Link>
                </div>
                <div id="service-box" className='uk-width-1-3@m uk-grid-margin'>
                    <Link to="/marriage" style={{ textDecoration: 'none' }} className='uk-grid-item-match'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            <img className="img" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-engagement-ring-wedding-wanicon-lineal-wanicon.png" width="35%" height="35%" alt="Icon XY" />
                            <h4>Hochzeit</h4>
                            <p>F&uuml;r den sch&ouml;nsten Tag in Ihrem Leben? Da k&ouml;nnen <strong>Sie entscheiden, ob wir zu Ihnen kommen und vor Ort shooten, oder ob Sie
                                Ihren Hochzeitstag im Sonnenschein-Studio festhalten wollen.</strong> Ihre W&uuml;nsche und Vorstellungen, gepaart mit unserer Erfahrung und
                                frischen Ideen, lassen Ihre Bilder zu etwas ganz Besonderem werden! </p>
                        </div>
                    </Link>
                </div>
                <div id="service-box" className='uk-width-1-3@m uk-grid-margin'>
                    <Link to="/akt" style={{ textDecoration: 'none' }} className='uk-grid-item-match'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            {/* <img src="https://img.icons8.com/cotton/64/000000/sexy-body.png"/> */}
                            <img className="img" src="https://img.icons8.com/ios/50/000000/venus-de-milo.png" width="35%" height="35%" alt="Icon XY" />
                            <h4>Aktportraits</h4>
                            <p>Texttexttext Texttexttext Texttexttext Texttexttext Texttexttext Texttexttext Texttexttext Texttexttext Texttexttext </p>
                        </div>
                    </Link>
                </div>
                <div id="service-box" className='uk-width-1-3@m uk-grid-margin'>
                    <Link to="/applicants" style={{ textDecoration: 'none' }} className='uk-grid-item-match'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            <img className="img" src="https://img.icons8.com/ios/50/000000/resume.png" width="35%" height="35%" alt="Icon XY" />
                            <h4>Bewerbungs und Portfoliobilder</h4>
                            <p>Ob für offfizielle Dokumente oder die neue Bewerbung&nbsp;&ndash; vom schnellen Shot bis zum ausgiebigen Bewerbungsshooting&nbsp;&ndash; <strong>Wir unterstuetzen Sie fuer den individuellen Neustart!</strong></p>
                        </div>
                    </Link>
                </div>
                <div id="service-box" className='uk-width-1-3@m uk-grid-margin'>
                    <Link to="/business" style={{ textDecoration: 'none' }} className='uk-grid-item-match'>
                        <div className='uk-card uk-card-default uk-card-body'>
                            {/* <img src="https://img.icons8.com/wired/64/000000/company.png"/> */}
                            <img className="img" src="https://img.icons8.com/wired/64/000000/company.png" width="35%" height="35%" alt="Icon XY" />
                            <h4>Firmen- und Messekunden</h4>
                            <p>Ob zu Marketing- oder Dokumentationszwecken, in der Firma oder auf der Messe&nbsp;&ndash; Sprechen Sie uns an und <strong> wir erstellen ein abgestimmtes Angebot für Sie!</strong></p>
                        </div>
                    </Link>
                </div>
                <div>
                    Source Icons:
                    <a href="https://icons8.com/icon/23877/lebenslauf">Lebenslauf icon by Icons8</a>
                    <a href="https://icons8.com/icon/4gefqSCrFsXU/venus-de-milo">Venus De Milo icon by Icons8</a>
                    {/* <a href="https://icons8.com/icon/87119/sexy-körper">Sexy Körper icon by Icons8</a> */}
                    <a href="https://icons8.com/icon/btqH2RurQuRm/engagement-ring">Engagement Ring icon by Icons8</a>
                    <a href="https://icons8.com/icon/5219/porträt">Porträt icon by Icons8</a>
                    <a href="https://icons8.com/icon/103840/unternehmen">Unternehmen icon by Icons8</a>
                </div>
            </section >
        )
    }
}