import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
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

const MapView = ({ onSpotClick }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [2.3333, 46.603354], // France
      zoom: 5.5,
      pitch: 0,
    });

    // Add navigation controls (iOS style)
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
        showCompass: true,
      }),
      "top-right"
    );

    // Disable scroll zoom for better mobile UX
    map.current.scrollZoom.disable();

    // Add markers for spots
    mockSpots.forEach((spot) => {
      const el = document.createElement("div");
      el.className = "cursor-pointer";
      el.innerHTML = `
        <div class="relative">
          <div class="absolute -inset-2 bg-ios-primary/20 rounded-full animate-pulse"></div>
          <div class="bg-ios-primary rounded-full p-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      `;
      
      el.addEventListener("click", () => onSpotClick(spot));

      new mapboxgl.Marker({ element: el })
        .setLngLat([spot.lng, spot.lat])
        .addTo(map.current!);
    });

    // Add geolocate control
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.current.addControl(geolocate, "bottom-right");

    setShowTokenInput(false);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, onSpotClick]);

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
      <div ref={mapContainer} className="absolute inset-0 pt-16 pb-20" />

      {/* Token Input */}
      {showTokenInput && (
        <div className="absolute inset-0 pt-16 pb-20 bg-background flex items-center justify-center p-4">
          <div className="ios-card p-6 max-w-md w-full space-y-4">
            <h3 className="text-lg font-semibold text-center">Configuration Mapbox</h3>
            <p className="text-sm text-muted-foreground text-center">
              Entrez votre token Mapbox public pour afficher la carte.{" "}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ios-primary hover:underline"
              >
                Obtenez-en un gratuitement ici
              </a>
            </p>
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-mono text-xs"
            />
            <Button 
              onClick={() => mapboxToken && setShowTokenInput(false)}
              disabled={!mapboxToken}
              className="w-full"
            >
              Activer la carte
            </Button>
          </div>
        </div>
      )}

      {/* Info Banner */}
      {!showTokenInput && (
        <div className="absolute top-20 left-4 right-4 z-10">
          <div className="ios-card p-3 shadow-lg">
            <p className="text-sm text-muted-foreground text-center">
              Carte interactive - Tapez sur un spot pour plus de détails
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
export type { Spot };
