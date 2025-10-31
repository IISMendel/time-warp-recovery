import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  mapboxToken: string;
}

export const MapComponent = ({ mapboxToken }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [8.8527, 45.5589], // Villa Cortese coordinates
      zoom: 15,
    });

    // Add marker for the school
    new mapboxgl.Marker({ color: '#9333ea' })
      .setLngLat([8.8527, 45.5589])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3 class="font-bold">IIS Gregorio Mendel</h3><p>Via Ruffini, 1<br>20020 Villa Cortese (MI)</p>')
      )
      .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="w-full h-[500px] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center rounded-xl">
        <div className="text-center p-8">
          <p className="text-2xl font-bold text-primary mb-2">🗺️ Mappa non disponibile</p>
          <p className="text-muted-foreground">Inserisci il token Mapbox per visualizzare la mappa</p>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className="w-full h-[500px]" />;
};
