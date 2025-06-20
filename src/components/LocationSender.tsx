import { useState } from "react";
import useSignalR from "../hooks/useSignalR";

const LocationSender: React.FC = () => {
  const [lat, setLat] = useState(23.791321725260843);
  const [lon, setLon] = useState(90.40046173448349);
  const userName = "symansalman@gmail.com"; // Replace with your email
  const { sendLocation } = useSignalR(userName);

  const handleSend = () => {
    sendLocation(lat, lon);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">
        User A - Send Location
      </h2>
      <div className="space-y-2">
        <div className="mb-4  grid grid-cols-2 gap-2">
          <span className="py-1 label px-4 text-xl rounded-lg bg-yellow-50 text-red-950">
            Latitude :{" "}
          </span>
          <input
            type="number"
            id="latitude"
            value={lat}
            onChange={(e) => setLat(Number(e.target.value))}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            placeholder="Latitude"
          />
        </div>

        <div className="mb-4  grid grid-cols-2 gap-2">
          <span className="py-1 label px-4 rounded-lg text-xl bg-sky-200 text-red-950">
            Longitude :{" "}
          </span>
          <input
            type="number"
            value={lon}
            onChange={(e) => setLon(Number(e.target.value))}
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
            placeholder="Longitude"
          />
        </div>
        <button
          onClick={handleSend}
          className="w-full mt-6 bg-green-500 text-black rounded-full px-4 py-2 hover:bg-opacity-80 shadow-lg"
        >
          Send Location
        </button>
      </div>
    </div>
  );
};

export default LocationSender;
