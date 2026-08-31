import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import React, {FunctionComponent, useState} from "react";
import styles from './Maps.module.css';

const center = {
  lat: 48.143389,
  lng: 17.116833
};

const mapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  zoomControl: true,
  styles: [
    {featureType: 'poi.business', stylers: [{visibility: 'off'}]},
    {featureType: 'transit', elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
    {featureType: 'water', elementType: 'geometry', stylers: [{color: '#cfe3e4'}]},
    {featureType: 'landscape', elementType: 'geometry', stylers: [{color: '#f4f4f2'}]},
    {featureType: 'road', elementType: 'geometry.stroke', stylers: [{visibility: 'off'}]}
  ]
};

const handleDirectionsClick = () => {
  const destination = 'The Blue Church (Church of St. Elizabeth) Bezručova 2, 811 09 Bratislava, Slovakia';
  const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  window.open(url, '_blank');
};

const Map: FunctionComponent = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setTimeout(() => {
    setIsMapLoaded(true);
    }, 1000)
  };

  return (
    <div className={styles.mapWrapper}>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_KEY}`}>
        <GoogleMap
          mapContainerClassName={styles.mapContainer}
          center={center}
          zoom={17}
          options={mapOptions}
          onLoad={handleMapLoad}
        >
          {isMapLoaded ?
            <div className={styles.infoContainer}>
              <div className={styles.verticalLine}/>
              <div className={styles.infoText}>
                <h1>The Blue Church</h1>
                <p>Bezručova 2, 811 09 Bratislava, Slovakia</p>
              </div>

              <button className={styles.directionsButton} onClick={handleDirectionsClick}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <img className="activity__link_arrow" style={{width: 18, height: 14}} src='/img/arrow.png' alt='arrow'/>
                  <img src={'/img/church.png'} alt={'directions'}/>
                </div>

                <p>Directions</p>

              </button>
            </div>
            : null}
          <Marker position={center}/>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
export default Map;
