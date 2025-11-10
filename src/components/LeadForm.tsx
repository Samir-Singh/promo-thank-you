import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Building, MapPin, User } from "lucide-react";

export default function LeadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    city: "Mumbai",
    locality: "",
    desksRequired: "",
  });

  const mumbaiLocalities = [
    "Airoli", "Andheri East", "Andheri West", "BKC", "Dadar West",
    "Ghatkopar West", "Goregaon East", "Hiranandani Powai", "Juinagar",
    "Lokhandwala", "Lower Parel", "Mulund", "New Cuffe Parade", "Thane", "Vashi"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly to discuss your workspace needs.");
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      company: "",
      city: "Mumbai",
      locality: "",
      desksRequired: "",
    });
    
    setTimeout(() => {
      navigate('/thank-you');
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will help you find the perfect workspace solution
            </p>
          </div>

          <Card className="shadow-medium border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                Book Your Workspace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2 mb-4">
                  <User className="w-6 h-6 text-primary" />
                  Help us reach you
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                      className="h-12"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-medium text-foreground">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      required
                      className="h-12"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="h-12"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      City
                    </Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Locality *</Label>
                    <Select 
                      value={formData.locality} 
                      onValueChange={(value) => setFormData({...formData, locality: value})}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Locality" />
                      </SelectTrigger>
                      <SelectContent>
                        {mumbaiLocalities.map((locality) => (
                          <SelectItem key={locality} value={locality}>
                            {locality}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Enquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our terms of service and privacy policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
