import { Calendar, Ruler, FileText, ChevronRight } from "lucide-react";

const RulesView = () => {
  const regions = [
    { id: 1, name: "Alpes-Maritimes (06)", updates: 2 },
    { id: 2, name: "Var (83)", updates: 0 },
    { id: 3, name: "Hautes-Alpes (05)", updates: 1 },
  ];

  const generalRules = [
    {
      icon: Calendar,
      title: "Périodes d'ouverture",
      description: "Mars à septembre pour la truite",
    },
    {
      icon: Ruler,
      title: "Tailles légales",
      description: "23 cm minimum pour la truite",
    },
    {
      icon: FileText,
      title: "Permis requis",
      description: "Carte de pêche obligatoire",
    },
  ];

  return (
    <div className="h-full pt-16 pb-20 overflow-y-auto">
      <div className="ios-nav-bar">
        <h1 className="text-2xl font-bold">Règlementation</h1>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* General Rules */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Règles générales
          </h2>
          {generalRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.title} className="ios-card p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* By Region */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Par département
          </h2>
          <div className="ios-card divide-y divide-ios-separator">
            {regions.map((region) => (
              <button
                key={region.id}
                className="w-full px-4 py-3 flex items-center justify-between active:bg-ios-fill transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <h3 className="font-medium text-sm">{region.name}</h3>
                    {region.updates > 0 && (
                      <span className="text-xs text-primary">
                        {region.updates} {region.updates === 1 ? "mise à jour" : "mises à jour"}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="ios-card p-4 bg-primary/5">
          <p className="text-sm text-muted-foreground text-center">
            Les règlementations sont mises à jour régulièrement. Vérifiez toujours les règles locales avant de pêcher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesView;
