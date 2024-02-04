import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Link from "next/link";

import styles from "./map.module.css";
import "leaflet/dist/leaflet.css";

export default function Map({ location, museums, xid, mobile }) {
  const museumObj = { markers: museums };
  const markers = [];

  for (const i in museumObj) {
    markers.push(
      museumObj[i].map((museum) => (
        <Marker
          icon={L.icon({
            iconSize: xid !== museum.xid ? [22, 31] : [35, 49],
            iconUrl: "/map-pin.png",
            popupAnchor: [0, -20],
          })}
          position={[museum.point.lat, museum.point.lon]}
        >
          <Popup>
            <Link href={"/museum/" + museum.xid}>
              <span className={styles.popup}>{museum.name}</span>
            </Link>
          </Popup>
        </Marker>
      ))
    );
  }

  return (
    <MapContainer
      center={[location.lat, location.lon]}
      zoom={mobile ? 10 : 12}
      scrollWheelZoom={true}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={process.env.MAPBOX_BASE + process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        id="mapbox/streets-v11"
      />
      {markers}
    </MapContainer>
  );
}
