import { MapPin, Heart, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "map", label: "Carte", icon: MapPin },
  { id: "favorites", label: "Favoris", icon: Heart },
  { id: "rules", label: "Règles", icon: FileText },
  { id: "profile", label: "Profil", icon: User },
];

const TabBar = ({ activeTab, onTabChange }: TabBarProps) => {
  return (
    <div className="ios-tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 flex-1 transition-all",
              "active:scale-95"
            )}
          >
            <Icon
              className={cn(
                "h-6 w-6 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
