Framework and tools used : 
React with TypeScript, Vite for setup, Tailwind CSS for styling, and Leaflet for the map.

Setup instructions : 
Install dependencies - 
1. npm install
2. npm install @microsoft/signalr leaflet react-leaflet tailwindcss postcss autoprefixer -D

   
Development server command :
npm run dev


Live link : 
https://raintor-task2n3.vercel.app/


# 📍 Real-Time Location Sharing via SignalR

A React-based real-time GPS location sharing application that uses SignalR for WebSocket communication. This project demonstrates two-way interaction between two users—one sending simulated or real coordinates and another receiving them and displaying the updates live on a map.

---

## 🚀 Features

- 📡 Real-time GPS coordinate transmission using **SignalR**
- 🗺️ Live map updates using **Leaflet.js**
- 🔁 Bidirectional messaging between sender and receiver
- 🧩 Modular architecture with a custom `useSignalR()` React hook
- ✅ Clean UI with responsive layout and real-time feedback

---

## 🧪 Live Hub Configuration

**SignalR Hub URL:**  
https://tech-test.raintor.com/Hub



**Outgoing Method (SendLatLon):**
- `lat`: latitude (float)
- `lon`: longitude (float)
- `userName`: string (email or identifier)

**Incoming Method (ReceiveLatLon):**
```json
{
  "userName": "Default",
  "lat": 25.73736464,
  "lon": 90.3644747
}


## How It Works
User A (Sender):
Enters coordinates or simulates GPS location → sends to the SignalR hub.

User B (Receiver):
Listens for the ReceiveLatLon method → updates the location on the map in real time.

Both interfaces are built in React and update state instantly as data is received.

## Getting Started
git clone https://github.com/salmansaymon57/raintor-task2n3.git
cd raintor-task2n3
npm install
npm start

