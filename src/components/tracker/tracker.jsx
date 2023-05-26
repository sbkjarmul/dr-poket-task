import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api";
import { routes } from "./constants/index.js";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export function Tracker() {
    const [directions, setDirections] = useState();
    const center = { lat: 37.382376, lng: -122.00722 };
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: String(GOOGLE_API_KEY),
    });

    useEffect(() => {
        if (isLoaded) {
            calcRoute();
        }
    }, [isLoaded]);

    if (!isLoaded) return <div>Loading...</div>;

    async function calcRoute() {
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();

        const waypoints = routes.slice(0, 25).map((location) => ({
            location: location,
            stopover: true,
        }));

        const request = {
            origin: waypoints[0].location,
            destination: waypoints[waypoints.length - 1].location,
            waypoints: waypoints.slice(1, -1),
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        };

        const results = await directionsService.route(request);
        setDirections(results);
    }

    return (
        <>
            <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                zoom={10}
                center={center}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                }}
            >
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </>
    );
}
