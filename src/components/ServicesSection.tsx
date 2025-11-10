import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Meeting Room",
      description: "Close deals and spark ideas in rooms built to impress. Reserve by the hour (and extend as needed) with screens and conferencing ready.",
      price: "₹499 per hour",
      features: ["Professional Setup", "Video Conferencing", "Hourly Booking", "Extendable"],
      gradient: "from-accent to-accent/80",
      offer: "50% OFF on first booking",
      url: "https://www.awfis.com/meeting-rooms?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    },
    {
      title: "Cabin Day Pass",
      description: "Your own four walls of focus, just for the day. Get a private cabin with Wi-Fi, power, and coffee on tap.",
      price: "₹850 per day",
      features: ["Private Space", "High-Speed Wi-Fi", "Power Outlets", "Complimentary Coffee"],
      gradient: "from-accent to-accent/80",
      url: "https://www.awfis.com/cabin-daypass?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    },
    {
      title: "Day Pass",
      description: "Freedom to work anywhere, without the monthly lock-in. Book your all-day access with high-speed Wi-Fi at your nearest Awfis centre.",
      price: "₹249 per day",
      features: ["Work Anywhere", "High-Speed Wi-Fi", "No Commitment", "Daily Access"],
      gradient: "from-accent to-accent/80",
      url: "https://www.awfis.com/day-pass?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    },
    {
      title: "Training Hub",
      description: "Your Ultimate Modular Space for Every Occasion. Perfect for corporate gatherings, networking events, creative shoots and podcasts.",
      price: "₹5,199 per hour",
      features: ["Ergonomic Chairs", "Pivot Desks", "Movable Screens", "Latest Technology"],
      gradient: "from-accent to-accent/80",
      url: "https://www.awfis.com/training-room?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    },
    {
      title: "Weekend Access",
      description: "Exclusive spaces for meetings, interviews, events, and more—open every weekend. Transform your weekends with Weekend Access by Awfis!",
      price: "₹1,000 per hour",
      features: ["Weekend Hours", "Event Spaces", "Interview Rooms", "Premium Centers"],
      gradient: "from-accent to-accent/80",
      url: "https://www.awfis.com/promo/awfis/weekend-access?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    },
    {
      title: "Virtual Office",
      description: "Give your business a premium address in top locations. Build credibility without the cost of a full-time office. Upgrade to Virtual Office Plus and add a GSTIN for your company.",
      price: "₹699 per month",
      features: ["Business Address", "Mail Handling", "GSTIN Option", "Professional Credibility"],
      gradient: "from-accent to-accent/80",
      url: "https://www.awfis.com/virtual-office?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Flexible Workspace Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From meeting rooms to virtual offices, we have the perfect solution for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up group border-0 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {service.offer && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold text-center leading-tight min-w-[95px] shadow-lg">
                    <div className="whitespace-nowrap font-bold">50% OFF<sup>#</sup></div>
                    <div className="whitespace-nowrap">on first booking</div>
                  </div>
                </div>
              )}
              
              <CardHeader className="relative">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-2">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent className="relative flex flex-col flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300 mt-auto">
                    Explore
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}