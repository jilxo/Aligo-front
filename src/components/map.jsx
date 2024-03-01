import React, { useState, useEffect } from "react";
import styled from "styled-components";
import L from "leaflet";

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

const StyledMap = styled(L.Map)`
  height: 100%;
  width: 100%;
`;

const Marker = styled(L.Marker)`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Maps = () => {
    const [lat, setLat] = useState(4.71093);
    const [lng, setLng] = useState(-74.07209);

    const handleMapChange = ({ lat, lng }) => {
        setLat(lat);
        setLng(lng);
    };

    useEffect(() => {
        // Crear un mapa
        const map = L.map("map").setView([lat, lng], 13);

        // Añadir el plugin DarkMode
        // L.Control.DarkMode({
        //     position: "topright",
        //     auto: true, // Activar el modo oscuro automáticamente
        // }).addTo(map);

        // Añadir capas al mapa
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Añadir un marcador al mapa
        L.marker([lat, lng]).addTo(map);

        return () => map.remove();
    }, [lat, lng]);

    return (
        <MapContainer>
            <StyledMap id="map" />
        </MapContainer>

    );
};

export default Maps;
