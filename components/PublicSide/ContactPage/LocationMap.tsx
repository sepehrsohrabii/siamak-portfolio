import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const LocationMap: React.FC = () => {
   const [geoData, setGeoData] = useState({ lat: 37.294199, lng: 49.574631 });

   return (
      <MapContainer
         center={[geoData.lat, geoData.lng]}
         zoom={15}
         style={{ height: '50vh' }}
         scrollWheelZoom={false}
      >
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
         />
         {geoData.lat && geoData.lng && (
            <Marker position={[geoData.lat, geoData.lng]} />
         )}
      </MapContainer>
   );
};
export default LocationMap;
