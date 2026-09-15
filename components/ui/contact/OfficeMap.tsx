import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// A jade teardrop pin instead of Leaflet's default blue marker.
const markerIcon = L.divIcon({
  className: "",
  html: `<svg width="30" height="40" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 26 16 26s16-15 16-26C32 7.163 24.837 0 16 0z" fill="#0C8A67"/>
    <circle cx="16" cy="16" r="6" fill="#FCF9F0"/>
  </svg>`,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -36],
});

interface OfficeMapProps {
  lat: number;
  lng: number;
  label: string;
}

// Uses Esri's free "Light Gray Canvas" basemap (no API key required)
// instead of the default Google Maps embed, so the map's muted tones sit
// with the rest of the site instead of Google's bright default styling.
const OfficeMap: React.FC<OfficeMapProps> = ({ lat, lng, label }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      />
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}" />
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OfficeMap;
