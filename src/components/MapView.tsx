import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

      {/* Map Container - Placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
        {/* Map markers */}
        <div className="relative h-full w-full pt-16 pb-20">
          {mockSpots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => onSpotClick(spot)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform active:scale-90"
              style={{
                left: `${(spot.lng - 5) * 10 + 50}%`,
                top: `${(45 - spot.lat) * 10 + 50}%`,
              }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                <div className="bg-primary rounded-full p-2 shadow-lg">
                  <MapPin className="h-5 w-5 text-white fill-white" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Location Button */}
        <Button
          size="icon"
          className="absolute bottom-24 right-4 h-11 w-11 rounded-full shadow-lg bg-white dark:bg-card"
          variant="outline"
        >
          <MapPin className="h-5 w-5 text-primary" />
        </Button>

        {/* Info Banner */}
        <div className="absolute top-20 left-4 right-4">
          <div className="ios-card p-3 shadow-lg">
            <p className="text-sm text-muted-foreground text-center">
              Carte interactive - Tapez sur un spot pour plus de détails
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
export type { Spot };
