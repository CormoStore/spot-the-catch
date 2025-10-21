import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Spot {
  id: number;
  name: string;
  lat: number;
  lng: number;
  rating: number;
}

const mockSpots: Spot[] = [
  { id: 1, name: "Lac de Serre-Ponçon", lat: 44.5, lng: 6.3, rating: 4.5 },
  { id: 2, name: "Rivière du Verdon", lat: 43.8, lng: 6.4, rating: 4.8 },
  { id: 3, name: "Étang de Berre", lat: 43.4, lng: 5.1, rating: 4.2 },
];

interface MapViewProps {
  onSpotClick: (spot: Spot) => void;
}

const MAPBOX_TOKEN = "pk.eyJ1IjoiY29ybW9zdG9yZSIsImEiOiJjbWgwZ2U4NWUwaG9tNWtxdWM0cTEyamtyIn0.eCz_pytNEYgJyKjnP9J_Lw";

const MapView = ({ onSpotClick }: MapViewProps) => {
  const [viewState, setViewState] = useState({
    longitude: 2.3333,
    latitude: 46.603354,
    zoom: 5.5,
  });

  return (
    <div className="relative h-full w-full">
      {/* Navigation Bar */}
      <div className="ios-nav-bar">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un spot..."
              className="pl-10 h-9 bg-ios-fill border-0 rounded-lg"
            />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 rounded-lg"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <div className="absolute inset-0 pt-16 pb-20">
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
          scrollZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Markers */}
          {mockSpots.map((spot) => (
            <Marker
              key={spot.id}
              longitude={spot.lng}
              latitude={spot.lat}
            >
              <div 
                className="relative cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onSpotClick(spot);
                }}
              >
                <div className="absolute -inset-2 bg-ios-primary/20 rounded-full animate-pulse"></div>
                <div className="bg-ios-primary rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
            </Marker>
          ))}

          {/* Navigation Controls */}
          <NavigationControl position="top-right" />

          {/* Geolocate Control */}
          <GeolocateControl
            position="bottom-right"
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
      </div>

      {/* Info Banner */}
      <div className="absolute top-20 left-4 right-4 z-10">
        <div className="ios-card p-3 shadow-lg">
          <p className="text-sm text-muted-foreground text-center">
            Carte interactive - Tapez sur un spot pour plus de détails
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapView;
export type { Spot };
