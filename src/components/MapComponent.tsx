import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  lat: number;
  lon: number;
  userName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lon, userName }) => {
  return (
    <MapContainer className="w-full h-full rounded-xl">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>
          {userName}: {lat}, {lon}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
