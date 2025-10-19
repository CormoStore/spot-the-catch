import { Settings, MapPin, Fish, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileView = () => {
  const stats = [
    { label: "Spots visités", value: "12", icon: MapPin },
    { label: "Prises enregistrées", value: "34", icon: Fish },
    { label: "Avis publiés", value: "8", icon: Award },
  ];

  const menuItems = [
    { label: "Mes spots", icon: MapPin },
    { label: "Mes prises", icon: Fish },
    { label: "Paramètres", icon: Settings },
  ];

  return (
    <div className="h-full pt-16 pb-20 overflow-y-auto">
      <div className="ios-nav-bar">
        <h1 className="text-2xl font-bold">Profil</h1>
      </div>

      <div className="px-4 pt-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mb-3">
            JD
          </div>
          <h2 className="text-xl font-bold">Jean Dupont</h2>
          <p className="text-sm text-muted-foreground">Pêcheur passionné depuis 2020</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="ios-card p-4 text-center">
                <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="ios-card divide-y divide-ios-separator">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full px-4 py-4 flex items-center justify-between active:bg-ios-fill transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full ios-button text-destructive border-destructive hover:bg-destructive/10"
        >
          Déconnexion
        </Button>
      </div>
    </div>
  );
};

export default ProfileView;
