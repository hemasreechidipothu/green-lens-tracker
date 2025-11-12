import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  title: string;
  location: string;
  severity: "low" | "medium" | "high";
  time: string;
  description: string;
  type: "pollution" | "deforestation" | "air-quality";
}

const AlertCard = ({ title, location, severity, time, description, type }: AlertCardProps) => {
  const severityConfig = {
    low: { color: "bg-warning/10 text-warning border-warning/30", label: "Low" },
    medium: { color: "bg-alert/10 text-alert border-alert/30", label: "Medium" },
    high: { color: "bg-destructive/10 text-destructive border-destructive/30", label: "High" }
  };

  const typeIcons = {
    pollution: "💧",
    deforestation: "🌲",
    "air-quality": "💨"
  };

  return (
    <Card className={cn(
      "p-5 border-l-4 transition-all duration-300 hover:shadow-md",
      severity === "high" ? "border-l-destructive" : 
      severity === "medium" ? "border-l-alert" : "border-l-warning"
    )}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="text-2xl mt-0.5">{typeIcons[type]}</div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-foreground">{title}</h4>
                <Badge className={severityConfig[severity].color}>
                  {severityConfig[severity].label}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {time}
                </span>
              </div>
            </div>
          </div>
          <AlertTriangle className={cn(
            "w-5 h-5 flex-shrink-0",
            severity === "high" ? "text-destructive" :
            severity === "medium" ? "text-alert" : "text-warning"
          )} />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="default" className="text-xs">
            View Details
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            Mark as Resolved
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlertCard;
