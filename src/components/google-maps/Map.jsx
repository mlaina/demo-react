import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { useEffect } from 'react';
import mapstyle from './styles/style-m.json';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const Map = (props) => {
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({
    lat: 40.4427651,
    lng: -3.6690794,
  });

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    setCenter({ lat: Number(props.lat), lng: Number(props.lng) });
  }, [props.lat, props.lng]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: mapstyle,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default React.memo(Map);
