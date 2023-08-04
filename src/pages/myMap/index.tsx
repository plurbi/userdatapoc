

import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '300%',
  height: '650px',  
};

const center = {
  lat: -38.0275187,
  lng: -57.5557404
};
const marker = center;

interface MyMapProps {
    lat:number;
    lng:number;
}

function MyMap({
    lat, lng
}: MyMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDi0E7R40DvyxOC0HTLDN1INlrxF3oyjGY"
  })

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:lat, lng: lng}}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{lat:lat, lng: lng}}></Marker>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)