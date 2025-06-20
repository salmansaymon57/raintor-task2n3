import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useEffect, useState } from 'react';

interface LocationData {
  userName: string;
  lat: number;
  lon: number;
}

const useSignalR = (userName: string) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl('https://tech-test.raintor.com/Hub')
      .build();

    connect.start()
      .then(() => {
        setConnection(connect);
        console.log('Connected to SignalR hub');
      })
      .catch((error) => console.error('Connection failed:', error));

    connect.on('ReceiveLatLon', (data: LocationData) => {
      setLocation(data);
    });

    return () => {
      connect.stop();
    };
  }, [userName]);

  const sendLocation = (lat: number, lon: number) => {
    if (connection) {
      connection.invoke('SendLatLon', lat, lon, userName)
        .catch((error) => console.error('Send failed:', error));
    }
  };

  return { location, sendLocation };
};

export default useSignalR;