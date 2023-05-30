import { routes } from "../constants";
const SLEEP_TIME_IN_SECONDS = 2000;
const MAX_WAYPOINTS_PER_REQUEST = 24;

async function calcRoute(map) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const waypoints = routes.map((location) => ({
        location: location,
        stopover: true,
    }));

    const maxWaypointsPerRequest = MAX_WAYPOINTS_PER_REQUEST;
    const origin = waypoints[0].location;
    const destination = waypoints[waypoints.length - 1].location;
    const requests = [];
    const mergedRoutes = [];
    const numRequests = Math.ceil(waypoints.length / maxWaypointsPerRequest);

    for (let i = 0; i < numRequests; i++) {
        const startIndex = i * maxWaypointsPerRequest;
        const endIndex = startIndex + maxWaypointsPerRequest;
        const waypointsSlice = waypoints.slice(startIndex, endIndex);

        const request = {
            origin: i === 0 ? origin : waypointsSlice[0].location,
            destination: i === numRequests - 1 ? destination : waypointsSlice[waypointsSlice.length - 1].location,
            waypoints: waypointsSlice.map((waypoint) => ({ location: waypoint.location })),
            travelMode: window.google.maps.TravelMode.DRIVING,
        };

        requests.push(request);
    }

    const processResponse = (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
            // eslint-disable-next-line no-undef
            const path = new google.maps.MVCArray();
            // eslint-disable-next-line no-undef
            const poly = new google.maps.Polyline({
                map: map,
                strokeColor: "#4986E7",
            });

            for (var i = 0, len = response.routes[0].overview_path.length; i < len; i++) {
                path.push(response.routes[0].overview_path[i]);
            }
            poly.setPath(path);
            mergedRoutes.push(response.routes[0]);
        } else {
            console.error("Directions request failed:", status);
        }

        if (mergedRoutes.length === numRequests) {
            response.routes = mergedRoutes;
            response.request = {
                origin: origin,
                destination: destination,
                waypoints: [],
                travelMode: window.google.maps.TravelMode.DRIVING,
            };
        }
    };

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const requestWithDelay = async () => {
        try {
            for (let request of requests) {
                await sleep(SLEEP_TIME_IN_SECONDS);
                await directionsService.route(request, processResponse);
            }
        } catch (e) {}
    };

    await requestWithDelay();
}

export { calcRoute };
