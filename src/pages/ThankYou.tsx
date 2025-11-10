import appComposition from "@/assets/app-composition.svg";
import appStoreBadge from "@/assets/app-store-badge.webp";
import awfisLogo from "@/assets/awfis-logo.png";
import googlePlayBadge from "@/assets/google-play-badge.webp";
import bannerImage from "@/assets/thank-you-banner.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ArrowRight,
  Clock,
  Coffee,
  MapPin,
  Monitor,
  Phone,
  Users,
  Wifi,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ThankYou() {
  const isMobile = useIsMobile();

  return (
    <>
      <Helmet>
        <title>Thank You - Awfis Space Solutions</title>
        <meta
          name="description"
          content="Thank you for your interest in Awfis coworking spaces. We will reach out to you shortly."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-background flex flex-col">
        {/* Banner Section with Image, Logo, Phone, and Centered Thank You Text */}
        <section className="relative h-56 md:h-64 lg:h-72 w-full overflow-hidden">
          <img
            src={bannerImage}
            alt="Awfis Coworking Space"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />

          {/* Logo - Top Left */}
          <div className="absolute top-6 left-6 md:left-12 z-10">
            <img src={awfisLogo} alt="Awfis" className="h-8 md:h-10" />
          </div>

          {/* Thank You Text - Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 drop-shadow-2xl">
              Thank you for your interest
            </h1>
            <p className="text-base md:text-lg text-white/95 text-center drop-shadow-lg">
              We will reach out to you shortly.
            </p>
          </div>

          {/* Phone Number - Top Right */}
          <div className="absolute top-6 right-6 md:right-12 z-10">
            <a
              href="tel:18602586633"
              className="text-lg md:text-xl font-bold text-white drop-shadow-lg hover:text-white/90 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              1860 258 6633
            </a>
          </div>
        </section>

        {/* Content Grid */}
        <div className="flex-1 grid lg:grid-cols-[60%_40%] md:grid-cols-2 grid-cols-1 gap-4">
          {/* Left Content - 60% */}
          <section className="p-2 md:p-3 lg:p-4 flex items-center justify-center">
            {/* Promotional Cards - Side by Side - Extended to full height */}
            <div className="grid grid-cols-2 gap-3 w-full h-full">
              {/* Day Pass Card */}
              <div className="border border-border rounded-lg p-2.5 bg-card hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="font-playfair text-base md:text-lg font-bold mb-0.5">
                  Book Day Pass
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Premium coworking access
                </p>
                <div className="space-y-1.5 mb-2 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>800+ Centers Nationwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Wifi className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>High-Speed WiFi & Printing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Coffee className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Unlimited Tea & Coffee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Community Networking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Monitor className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Premium Workstations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Flexible Daily Access</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Use code:
                  </p>
                  <code className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono block mb-2">
                    DAY15
                  </code>
                  <a
                    href="https://www.awfis.com/day-pass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors text-xs font-medium w-full"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Meeting Room Card */}
              <div className="border border-border rounded-lg p-2.5 bg-card hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="font-playfair text-base md:text-lg font-bold mb-0.5">
                  Meeting Rooms
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  Professional meeting spaces
                </p>
                <div className="space-y-1.5 mb-2 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>4-20 Seater Rooms Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Monitor className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>HD Display & Video Conferencing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Flexible Hourly Bookings</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Wifi className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Ultra-Fast Internet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Coffee className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Complimentary Refreshments</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Prime Business Locations</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] text-muted-foreground mb-1">
                    Use code:
                  </p>
                  <code className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono block mb-2">
                    MEET20
                  </code>
                  <a
                    href="https://www.awfis.com/book-meeting-rooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors text-xs font-medium w-full"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Right Visual - 40% */}
          <section className="bg-muted/30 p-2 md:p-3 lg:p-4 flex items-center justify-center">
            {isMobile ? (
              /* Mobile: App Store Badges */
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <h3 className="font-playfair text-lg font-semibold text-center px-4">
                  Download the Awfis app for Exclusive Benefits
                </h3>
                <div className="flex items-center justify-center gap-3 px-4">
                  <a
                    href="https://apps.apple.com/in/app/awfis-coworking/id1027252650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[45%] hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={appStoreBadge}
                      alt="Download on the App Store"
                      className="w-full h-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/search?q=awfis&c=apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[45%] hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={googlePlayBadge}
                      alt="Get it on Google Play"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            ) : (
              /* Desktop: App Composition SVG */
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={appComposition}
                  alt="Awfis App Interface"
                  className="w-[49%] h-auto max-h-[calc(100vh-14rem)] object-contain"
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
