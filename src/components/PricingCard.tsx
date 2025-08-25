import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onSubscribe: () => void;
}

export const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false, 
  onSubscribe 
}: PricingCardProps) => {
  return (
    <Card className={`p-8 relative transition-all duration-300 hover:shadow-glow ${
      isPopular ? 'border-primary shadow-glow bg-gradient-card' : 'bg-card hover:border-accent/40'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-card">
            Más Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground ml-1">€/mes</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
            <span className="text-card-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        onClick={onSubscribe}
        variant={isPopular ? "hero" : "premium"}
        size="lg"
        className="w-full"
      >
        Obtener Ahora
      </Button>
    </Card>
  );
};