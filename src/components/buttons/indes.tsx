import React, { useEffect } from 'react';

// Definir la interfaz para las propiedades
interface GoogleMapProps {
  apiKey: string;
}

// Inicializar el componente
const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey }) => {
  useEffect(() => {
    // Cargar la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  // Función de inicialización del mapa
  const initMap = () => {
    const myLatLng = { lat: 40.7128, lng: -74.0060 };

    const mapOptions: google.maps.MapOptions = {
      center: myLatLng,
      zoom: 12,
    };

    const map = new google.maps.Map(document.getElementById('map')!, mapOptions);

    // Marcador en la ubicación
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Barbería XYZ',
    });
  };

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;
