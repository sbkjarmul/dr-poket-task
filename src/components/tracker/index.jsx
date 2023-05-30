import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { routes } from "./constants/index.js";
import { calcRoute } from "./utils";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export function Tracker() {
    const [map, setMap] = useState(null);
    const center = routes[0];
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: String(GOOGLE_API_KEY),
    });

    useEffect(() => {
        if (isLoaded) {
            calcRoute(map);
        }
    }, [isLoaded, map]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <GoogleMap
                mapContainerStyle={{ height: "100%", width: "100%" }}
                zoom={10}
                onLoad={(map) => setMap(map)}
                center={center}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                }}
            ></GoogleMap>
        </>
    );
}
