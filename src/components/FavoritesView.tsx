import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const FavoritesView = () => {
  const favorites = [
    { id: 1, name: "Lac de Serre-Ponçon", rating: 4.5, distance: "12 km" },
    { id: 2, name: "Rivière du Verdon", rating: 4.8, distance: "8 km" },
  ];

  return (
    <div className="h-full pt-16 pb-20 overflow-y-auto">
      <div className="ios-nav-bar">
        <h1 className="text-2xl font-bold">Mes Favoris</h1>
      </div>

      <div className="px-4 pt-4 space-y-3">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg mb-2">Aucun favori</h3>
            <p className="text-muted-foreground text-sm">
              Ajoutez vos spots préférés pour les retrouver facilement
            </p>
          </div>
        ) : (
          favorites.map((spot) => (
            <div key={spot.id} className="ios-card p-4">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{spot.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < Math.floor(spot.rating) ? "text-yellow-500 text-sm" : "text-gray-300 text-sm"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">• {spot.distance}</span>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 rounded-full"
                >
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesView;
