import { X, Heart, Navigation, Fish, Info, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Spot } from "./MapView";

interface SpotDetailsProps {
  spot: Spot;
  onClose: () => void;
}

const SpotDetails = ({ spot, onClose }: SpotDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background animate-slide-up">
      {/* Header */}
      <div className="ios-nav-bar">
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="h-9 w-9 rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold flex-1 text-center">Détails</h1>
        <div className="w-9" />
      </div>

      {/* Content */}
      <div className="pt-16 pb-20 overflow-y-auto h-full">
        <div className="px-4 space-y-4">
          {/* Spot Header */}
          <div className="ios-card p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{spot.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(spot.rating) ? "text-yellow-500" : "text-gray-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {spot.rating} (127 avis)
                  </span>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-11 w-11 rounded-full"
              >
                <Heart className="h-6 w-6" />
              </Button>
            </div>

            <Button className="w-full ios-button bg-primary hover:bg-primary/90">
              <Navigation className="h-4 w-4 mr-2" />
              Itinéraire
            </Button>
          </div>

          {/* Mini Map */}
          <div className="ios-card overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
              <div className="text-6xl">📍</div>
            </div>
          </div>

          {/* Fish Types */}
          <div className="ios-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Fish className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-base">Poissons présents</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">🐟 Truite</Badge>
              <Badge variant="secondary" className="rounded-full">🐠 Brochet</Badge>
              <Badge variant="secondary" className="rounded-full">🎣 Perche</Badge>
              <Badge variant="secondary" className="rounded-full">🐡 Sandre</Badge>
            </div>
          </div>

          {/* Regulations */}
          <div className="ios-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-base">Règlementation</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-ios-separator last:border-0">
                <span className="text-muted-foreground">Taille légale (Truite)</span>
                <span className="font-medium">23 cm minimum</span>
              </div>
              <div className="flex justify-between py-2 border-b border-ios-separator last:border-0">
                <span className="text-muted-foreground">Période</span>
                <span className="font-medium">Mars - Septembre</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Permis requis</span>
                <span className="font-medium">Carte de pêche</span>
              </div>
            </div>
          </div>

          {/* Community Reviews */}
          <div className="ios-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-base">Avis de la communauté</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                Tout voir
              </Button>
            </div>
            
            {[1, 2].map((i) => (
              <div key={i} className="border-t border-ios-separator pt-3 first:border-0 first:pt-0">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Jean Dupont</span>
                      <span className="text-xs text-muted-foreground">Il y a 2j</span>
                    </div>
                    <div className="flex items-center my-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-500 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Excellent spot ! Belle prise ce matin.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full ios-button">
              Ajouter un avis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
