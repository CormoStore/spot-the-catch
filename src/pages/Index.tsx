import { useState } from "react";
import TabBar from "@/components/TabBar";
import MapView from "@/components/MapView";
import SpotDetails from "@/components/SpotDetails";
import FavoritesView from "@/components/FavoritesView";
import RulesView from "@/components/RulesView";
import ProfileView from "@/components/ProfileView";
import type { Spot } from "@/components/MapView";

const Index = () => {
  const [activeTab, setActiveTab] = useState("map");
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  const renderContent = () => {
    if (selectedSpot) {
      return <SpotDetails spot={selectedSpot} onClose={() => setSelectedSpot(null)} />;
    }

    switch (activeTab) {
      case "map":
        return <MapView onSpotClick={setSelectedSpot} />;
      case "favorites":
        return <FavoritesView />;
      case "rules":
        return <RulesView />;
      case "profile":
        return <ProfileView />;
      default:
        return <MapView onSpotClick={setSelectedSpot} />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {renderContent()}
      {!selectedSpot && <TabBar activeTab={activeTab} onTabChange={setActiveTab} />}
    </div>
  );
};

export default Index;
