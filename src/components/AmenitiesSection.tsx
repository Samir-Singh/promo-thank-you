import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Wifi, Users, Wrench, Printer, Building, Car, MapPin } from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: Coffee,
      title: "All-day Café",
      description: "Avail all-day café services with up to 15% OFF on in-app café orders",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "High Speed Wi-Fi",
      description: "Lightning-fast internet connectivity for seamless work experience",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "24/7 Housekeeping",
      description: "Round the clock housekeeping services to maintain pristine workspace",
      color: "text-success"
    },
    {
      icon: Wrench,
      title: "Expert IT Support",
      description: "Professional IT assistance whenever you need technical help",
      color: "text-primary"
    },
    {
      icon: Printer,
      title: "Printing & Scanning",
      description: "Efficient printing and scanning services for all your business needs",
      color: "text-accent"
    },
    {
      icon: Building,
      title: "Office Administration",
      description: "Complete office supplies and administrative support services",
      color: "text-success"
    },
    {
      icon: Car,
      title: "Ample Car Parking",
      description: "Sufficient parking spaces for your convenience and peace of mind",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Travel Solutions",
      description: "Comprehensive travel assistance and booking solutions",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/20 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Premium Amenities Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a productive and comfortable work environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card 
                key={amenity.title}
                className="text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in group border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/50 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${amenity.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}