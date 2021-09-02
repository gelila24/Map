import React, { useRef, useState, useEffect } from 'react'
import { Card, CardBody } from 'reactstrap';
import L, { popup } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet'
import * as PharmacyData from "./data/Pharmacy.json";
import './App.css';
import GeoLocation from './useGeoLocation';
import { FaMapMarkerAlt } from 'react-icons/fa';
import custonMarker from "./images/img/marker.png"
import SideCard from './SideCard';
//8.885215206422316, 38.809657194171386


const Map1 = () => {
  const [center, setCenter] = useState({ lat: 8.885215206422316, lng: 38.809657194171386 });
  const mapRef = useRef();
  const ZOOM_LEVEL = 9;
  const [activePharmacy, setActivePharmacy] = React.useState({});
  const location = GeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  useEffect(() => {
    console.dir(PharmacyData)
  }, [])



  const myIcon = new L.Icon({
    iconUrl: custonMarker,
    iconRetinaUrl: custonMarker,
    popupAnchor: [-0, -0],
    iconSize: [40, 40]
  })
  return (
    <div className="App">
      <div style={{ display: 'grid', gridTemplateColumns: "1fr auto" }}>
        <div>
          <Card >
            <CardBody>
              <MapContainer center={center} zoom={12} style={{ height: '100vh', width: '75vw' }} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

                {
                  !location.error ?
                    <Marker
                      position={[
                        location.coordinates.lat,
                        location.coordinates.lng,

                      ]}

                      icon={myIcon}
                    >
                      <Popup>Current location</Popup>

                    </Marker> : null

                }
                {
                  PharmacyData.features.map(pharmacy => (
                    <Marker
                      key={pharmacy.properties.pharmacy_id}
                      position={[
                        pharmacy.geometry.coordinates[0],
                        pharmacy.geometry.coordinates[1]
                      ]}
                      eventHandlers={{
                        click: (e) => {
                          setActivePharmacy(pharmacy);
                          console.log(pharmacy)
                        }
                      }}
                    >
                      <Popup
                        position={[
                          pharmacy.geometry.coordinates[0],
                          pharmacy.geometry.coordinates[1]
                        ]}
                      >
                        <div>
                          <h2>{pharmacy.properties.pharmacyName}</h2>
                          <p>{pharmacy.properties.description}</p>
                        </div>
                      </Popup>
                    </Marker>
                  )
                  )
                }

              </MapContainer>
            </CardBody>
          </Card>
        </div>
        {(activePharmacy.properties) ? <SideCard pharmacy={activePharmacy} /> : null}
      </div>
    </div>
  )
}

export default Map1
