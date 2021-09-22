import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import '../../App.css'

const Maps = () => {

    const [hashtagAndLocations, setHashtagAndLocations] = useState([]);
    const [popup, setPopup] = useState(true);

    let position = []

    useEffect(() => {
        // User logado
        setHashtagAndLocations([
            {
                hashTag: 'Hash1',
                location: [-22.915777, -47.065281],
            },
            {
                hashTag: 'Hash2',
                location: [-22.915755, -47.065282],
            },
            {
                hashTag: 'Hash3',
                location: [-22.915744, -47.065283],
            },
            {
                hashTag: 'Hash4',
                location: [-22.915127, -47.065284],
            },
            {
                hashTag: 'Hash5',
                location: [-22.915722, -47.065285],
            },
        ])
    }, []);


    return (

        <MapContainer 
            center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>

    );
}

export default Maps;