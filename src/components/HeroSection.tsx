import awfisLogo from "@/assets/awfis-logo.png";
import EmbeddedLeadForm from "@/components/EmbeddedLeadForm";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-primary/5">
      {/* Mobile Slideshow Section */}
      <div className="block lg:hidden relative">
        <BackgroundSlideshow isMobile={true} />
        
        {/* Mobile Overlay Content - Only Logo and Headline */}
        <div className="absolute inset-0 flex flex-col justify-center z-10">
          <div className="bg-gradient-to-b from-black/80 via-black/60 to-black/40 absolute inset-0"></div>
          <div className="relative z-10 container mx-auto px-4">
            {/* Awfis Logo */}
            <div className="mb-4">
              <img src={awfisLogo} alt="Awfis Space Solutions" className="h-10 w-auto drop-shadow-2xl" />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-2xl font-bold leading-tight text-white drop-shadow-2xl">
              Professional Coworking
              <span className="block text-white drop-shadow-2xl">
                <span className="text-primary drop-shadow-2xl">Office Spaces</span>
              </span>
              <span className="block">In Mumbai</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Desktop Background Section */}
      <div className="hidden lg:block relative py-16 lg:py-24">
        <BackgroundSlideshow isMobile={false} />
        
        {/* Enhanced Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        
        {/* Desktop Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left: Hero Content - Takes 2 columns on lg+ */}
            <div className="lg:col-span-2 space-y-8">
              {/* Awfis Logo */}
              <div className="mb-8">
                <img src={awfisLogo} alt="Awfis Space Solutions" className="h-12 md:h-16 lg:h-20 w-auto" />
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                  Professional Coworking
                  <span className="block text-primary drop-shadow-lg">Office Spaces</span>
                  <span className="block">In Mumbai</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                  Private Office Spaces, Fixed Seats and Cabins
                  <br />
                  <span className="text-2xl font-bold text-primary drop-shadow-lg block mt-1">starting from ₹11,000 per month</span>
                </p>
              </div>
              
              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-white/90 drop-shadow-sm max-w-2xl">
                  Professional Coworking Solutions in Mumbai with premium office spaces, spacious multi-seater cabins and fixed desks. Whether you are an individual or an organisation, Awfis has a solution for you.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full drop-shadow-sm"></div>
                    <span className="text-sm font-medium text-white drop-shadow-sm">Premium Locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full drop-shadow-sm"></div>
                    <span className="text-sm font-medium text-white drop-shadow-sm">Flexible spaces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full drop-shadow-sm"></div>
                    <span className="text-sm font-medium text-white drop-shadow-sm">Modern Amenities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full drop-shadow-sm"></div>
                    <span className="text-sm font-medium text-white drop-shadow-sm">All-day Café</span>
                  </div>
                </div>
                
                <div className="hidden lg:block h-12" aria-hidden="true" />
                {/* Mumbai Localities Banner */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Awfis Mumbai Network</p>
                  <div className="text-sm font-medium text-foreground leading-relaxed">
                    Dadar West | Lower Parel | Ghatkopar West | BKC | Andheri East | Andheri West | Powai | Lokhandwala | Goregaon East | Thane | Vashi | Mulund | Airoli | Juinagar | New Cuffe Parade
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Form - Takes 1 column on lg+ */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <EmbeddedLeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content Section - Below Slideshow */}
      <div className="block lg:hidden py-8 px-4 bg-background">
        <div className="container mx-auto space-y-6">
          {/* Mobile Lead Form - First */}
          <div>
            <EmbeddedLeadForm />
          </div>
          
          {/* Product and Pricing Line */}
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">
              Private Office Spaces, Fixed Seats and Cabins
            </p>
            <p className="text-xl font-bold text-primary mt-1">starting from ₹11,000 per month</p>
          </div>
          
          {/* Description Copy */}
          <p className="text-base leading-relaxed text-muted-foreground text-center">
            Professional Coworking Solutions in Mumbai with premium office spaces, spacious multi-seater cabins and fixed desks. Whether you are an individual or an organisation, Awfis has a solution for you.
          </p>

          {/* 4 Features Bullet Points */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Premium Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Flexible spaces</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Modern Amenities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">All-day Café</span>
            </div>
          </div>
          
          {/* Mumbai Localities Banner */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Awfis Mumbai Network</p>
            <div className="text-sm font-medium text-foreground leading-relaxed">
              Dadar West | Lower Parel | Ghatkopar West | BKC | Andheri East | Andheri West | Powai | Lokhandwala | Goregaon East | Thane | Vashi | Mulund | Airoli | Juinagar | New Cuffe Parade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}