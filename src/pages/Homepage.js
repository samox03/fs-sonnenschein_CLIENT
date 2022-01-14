import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Serviceboxes from "../components/Serviceboxes/Serviceboxes";

export default class HomePage extends Component {
    render() {
        return (
            <div id="body">
                <div class="uk-cover-container">
                    <canvas width="100%" height=""></canvas>
                    <img src="../../front-placeholder-image.jpg" alt="" uk-cover />
                </div>
                <h2>Willkommen!</h2>
                <p>Wir sind das Fotostudio mit der Sonnenscheingarantie.</p>
                {/* insert Navbar? */}
                {/* insert picturebar */}

                <p>Was das ist?
                    Nun, wir lassen f&uuml;r jeden unserer Kunden mit tollen Bildern die Sonne aufgehen! Mit Ihren Wunschbildern in der Hand,
                    werden Sie mit einem zufriedenen und gl&uuml;cklichen L&auml;cheln unser Studio verlassen. </p>
                <p>Ob Akt, Portrait, Pass- oder Bewerbungsbilder,
                    Kids, Freundschaften oder Tierbilder&nbsp;&ndash; wir halten Ihre sonnigen Momente fest.
                    Und f&uuml;r den sch&ouml;nsten Tag in Ihrem Leben? Da k&ouml;nnen Sie entscheiden, ob wir zu Ihnen kommen und vor Ort shooten, oder ob Sie
                    Ihren Hochzeitstag im Sonnenschein-Studio festhalten wollen. Ihre W&uuml;nsche und Vorstellungen, gepaart mit unserer Erfahrung und
                    frischen Ideen, lassen Ihre Bilder zu etwas ganz Besonderem werden. </p>


                <Serviceboxes></Serviceboxes>
            </div>
        )
    }
}