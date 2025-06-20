import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useSignalR from "../hooks/useSignalR";
import { useEffect } from "react";

// Component to set initial map view
const InitialMapView: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    map.setView([25.73736464, 90.3644747], 13, { animate: false });
  }, [map]);
  return null;
};

// Component to update map view on location change
const LocationUpdater: React.FC<{ lat: number; lon: number }> = ({
  lat,
  lon,
}) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lon], 13, { duration: 1 });
  }, [lat, lon, map]);
  return null;
};

const LocationReceiver: React.FC = () => {
  const userName = "symansalman@gmail.com"; // Replace with your email
  const { location } = useSignalR(userName);

  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">
        User B - Receive Location
      </h2>
      <div className="h-64">
        <MapContainer className="w-full h-full rounded-xl">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={
              <>
                &copy;{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenStreetMap
                </a>{" "}
                contributors
              </>
            }
          />
          <InitialMapView />
          {location && (
            <>
              <Marker position={[location.lat, location.lon]}>
                <Popup>
                  {location.userName}: {location.lat}, {location.lon}
                </Popup>
              </Marker>
              <LocationUpdater lat={location.lat} lon={location.lon} />
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationReceiver;
