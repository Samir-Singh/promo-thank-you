import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, User } from "lucide-react";

export default function EmbeddedLeadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    locality: "",
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
      locality: "",
    });
    
    setTimeout(() => {
      navigate('/thank-you');
    }, 500);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Help us reach you
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <Label htmlFor="fullName" className="text-xs font-medium">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                  className="h-9 text-sm"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-xs font-medium">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="h-9 text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="text-xs font-medium">Mobile *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  required
                  className="h-9 text-sm"
                  placeholder="Enter mobile number"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-xs font-medium">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-9 text-sm"
                  placeholder="Company name"
                />
              </div>

              <div>
                <Label className="text-xs font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Locality *
                </Label>
                <Select 
                  value={formData.locality} 
                  onValueChange={(value) => setFormData({...formData, locality: value})}
                  required
                >
                  <SelectTrigger className="h-9 text-sm">
                    <SelectValue placeholder="Select Location" />
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

            <Button type="submit" className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
              Submit Enquiry
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-tight">
              By submitting, you agree to our terms and privacy policy
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
