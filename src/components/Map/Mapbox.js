import React, { Component } from 'react'


export default class Mapbox extends Component {
    render() {

        return (
            <div>
                <div id="map"></div>
                <script>
                    mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
                    const map = new mapboxgl.Map({
                        container: 'map', // container ID
                    style: 'mapbox://styles/mapbox/streets-v11', // style URL
                    center: [-74.5, 40], // starting position [lng, lat]
                    zoom: 9 // starting zoom
});
                </script>
            </div>
        )
    }
}