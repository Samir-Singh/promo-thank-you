import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import city icons
import mumbaiIcon from "@/assets/city-icons/mumbai.png";
import delhiIcon from "@/assets/city-icons/delhi.png";
import gurgaonIcon from "@/assets/city-icons/gurgaon.png";
import noidaIcon from "@/assets/city-icons/noida.png";
import bengaluruIcon from "@/assets/city-icons/bengaluru.png";
import hyderabadIcon from "@/assets/city-icons/hyderabad.png";
import kolkataIcon from "@/assets/city-icons/kolkata.png";
import chennaiIcon from "@/assets/city-icons/chennai.png";
import puneIcon from "@/assets/city-icons/pune.png";
import ahmedabadIcon from "@/assets/city-icons/ahmedabad.png";
import kochiIcon from "@/assets/city-icons/kochi.png";
import bhubaneswarIcon from "@/assets/city-icons/bhubaneswar.png";
import lucknowIcon from "@/assets/city-icons/lucknow.png";
import chandigarhIcon from "@/assets/city-icons/chandigarh.png";
import jaipurIcon from "@/assets/city-icons/jaipur.png";
import nagpurIcon from "@/assets/city-icons/nagpur.png";
import indoreIcon from "@/assets/city-icons/indore.png";
import guwahatiIcon from "@/assets/city-icons/guwahati.png";

export default function NetworkSection() {
  const tier1Cities = [
    { name: "Mumbai", icon: mumbaiIcon, description: "Financial Capital", url: "https://www.awfis.com/office-space/mumbai?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Delhi", icon: delhiIcon, description: "National Capital", url: "https://www.awfis.com/office-space/new-delhi?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Gurgaon", icon: gurgaonIcon, description: "Millennium City", url: "https://www.awfis.com/office-space/gurgaon?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Noida", icon: noidaIcon, description: "Planned City", url: "https://www.awfis.com/office-space/noida?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Bengaluru", icon: bengaluruIcon, description: "Silicon Valley", url: "https://www.awfis.com/office-space/bengaluru?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Hyderabad", icon: hyderabadIcon, description: "Pearl City", url: "https://www.awfis.com/office-space/hyderabad?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Kolkata", icon: kolkataIcon, description: "Cultural Capital", url: "https://www.awfis.com/office-space/kolkata?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Chennai", icon: chennaiIcon, description: "Detroit of India", url: "https://www.awfis.com/office-space/chennai?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" }
  ];

  const tier2Cities = [
    { name: "Pune", icon: puneIcon, description: "Oxford of East", url: "https://www.awfis.com/office-space/pune?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Ahmedabad", icon: ahmedabadIcon, description: "Manchester of India", url: "https://www.awfis.com/office-space/ahmedabad?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Kochi", icon: kochiIcon, description: "Queen of Arabian Sea", url: "https://www.awfis.com/office-space/kochi?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Bhubaneswar", icon: bhubaneswarIcon, description: "Temple City", url: "https://www.awfis.com/office-space/bhubaneswar?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Lucknow", icon: lucknowIcon, description: "City of Nawabs", url: "https://www.awfis.com/office-space/lucknow?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Chandigarh", icon: chandigarhIcon, description: "City Beautiful", url: "https://www.awfis.com/office-space/chandigarh?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Jaipur", icon: jaipurIcon, description: "Pink City", url: "https://www.awfis.com/office-space/jaipur?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Nagpur", icon: nagpurIcon, description: "Orange City", url: "https://www.awfis.com/office-space/nagpur?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Indore", icon: indoreIcon, description: "Commercial Capital", url: "https://www.awfis.com/office-space/indore?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" },
    { name: "Guwahati", icon: guwahatiIcon, description: "Gateway to Northeast", url: "https://www.awfis.com/office-space/guwahati?utm_source=MUMCW&utm_medium=LP&utm_campaign=LeadGen" }
  ];

  const mumbaiLocations = [
    "Airoli", "Andheri East", "Andheri West", "BKC", "Dadar West", 
    "Ghatkopar West", "Goregaon East", "Hiranandani Powai", "Juinagar", 
    "Lokhandwala", "Lower Parel", "Mulund", "New Cuffe Parade", "Thane", "Vashi"
  ];

  const stats = [
    { value: "200+", label: "Centres" },
    { value: "18", label: "Cities" },
    { value: "1.35L+", label: "Seats Booked" },
    { value: "NSE & BSE", label: "Listed" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose from India's Largest Network
          </h2>
          <div className="text-lg font-semibold text-primary mb-4">
            18 Cities | 200+ Centres | 3000+ Clients | 1.35L+ Seats
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto whitespace-normal lg:whitespace-nowrap">
            Awfis is India's largest workspace solutions platform, the first in its category to be listed on NSE & BSE
          </p>
        </div>


        {/* City Networks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...tier1Cities, ...tier2Cities].map((city, index) => (
            <a
              key={city.name}
              href={city.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-all duration-200 animate-fade-in shadow-soft cursor-pointer"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <img src={city.icon} alt={`${city.name} icon`} className="w-8 h-8" />
              <div>
                <div className="font-semibold text-foreground">{city.name}</div>
                <div className="text-xs text-muted-foreground">{city.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}