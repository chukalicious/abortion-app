import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";

import { mapStyle } from "./mapStyle";

const containerStyle = {
  width: "100%",
  height: "45vh",
};

const center = {
  lat: 39.624,
  lng: -95.962,
};

const options = {
  styles: mapStyle,
};
const Map = () => {
  const [zoom, setZoom] = useState(4);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    setZoom(4);
  }, []);

  return (
    <div className="hero max-h-fit bg-base-200">
      <div className="hero-content flex-col-reverse w-full lg:flex-row-reverse">
        <div className="flex w-full mx-auto h-[45vh] lg:w-[50%]">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={zoom}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={options}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col lg:w-[50%] lg:mx-auto lg:mt-[-25vh] ">
          <h1 className="text-2xl font-bold lg:mx-auto lg:mb-4">
            Search for a location on the map
          </h1>
          <div className="card flex flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100 lg:mx-auto">
            <div className="card-body">
              <div className="form-control">
                <div className="input-group ">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
