import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon: LucideIcon;
  status: "good" | "warning" | "critical";
  description?: string;
}

const MetricsCard = ({ 
  title, 
  value, 
  unit, 
  change, 
  icon: Icon, 
  status,
  description 
}: MetricsCardProps) => {
  const statusColors = {
    good: "text-success border-success/20 bg-success/5",
    warning: "text-warning border-warning/20 bg-warning/5",
    critical: "text-destructive border-destructive/20 bg-destructive/5"
  };

  const changeColors = {
    good: change && change > 0 ? "text-success" : "text-destructive",
    warning: change && change > 0 ? "text-success" : "text-destructive",
    critical: change && change > 0 ? "text-destructive" : "text-success"
  };

  return (
    <Card className="p-6 border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-card to-muted/20">
      <div className="flex items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <div className={cn(
              "p-2 rounded-lg border",
              statusColors[status]
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{value}</span>
              {unit && <span className="text-lg text-muted-foreground">{unit}</span>}
            </div>
            
            {change !== undefined && (
              <div className={cn("text-sm font-medium", changeColors[status])}>
                {change > 0 ? "+" : ""}{change}% from last week
              </div>
            )}
            
            {description && (
              <p className="text-xs text-muted-foreground pt-1">{description}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricsCard;
