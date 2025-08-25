import { Card } from "@/components/ui/card";
import { StatsCounter } from "./StatsCounter";

interface StatsCardProps {
  title: string;
  value: number | string;
  suffix?: string;
  description: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({ 
  title, 
  value, 
  suffix = "", 
  description, 
  icon 
}: StatsCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow animate-float">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      
      <div className="mb-2">
        {typeof value === 'number' ? (
          <StatsCounter 
            value={value} 
            suffix={suffix}
            className="text-3xl font-bold text-primary"
          />
        ) : (
          <span className="text-3xl font-bold text-primary">
            {value}{suffix}
          </span>
        )}
      </div>
      
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
};