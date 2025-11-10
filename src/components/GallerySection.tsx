import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import awfisSlide1 from "@/assets/awfis-slide-1.jpg";
import awfisSlide2 from "@/assets/awfis-slide-2.jpg";
import awfisSlide3 from "@/assets/awfis-slide-3.jpg";
import awfisSlide4 from "@/assets/awfis-slide-4.jpg";
import awfisSlide5 from "@/assets/awfis-slide-5.jpg";
import awfisSlide6 from "@/assets/awfis-slide-6.jpg";
import awfisSlide7 from "@/assets/awfis-slide-7.jpg";
import goldSlide1 from "@/assets/gold-slide-1.jpg";
import goldSlide2 from "@/assets/gold-slide-2.jpg";
import goldSlide3 from "@/assets/gold-slide-3.jpg";
import goldSlide4 from "@/assets/gold-slide-4.jpg";
import goldSlide5 from "@/assets/gold-slide-5.jpg";
import goldSlide6 from "@/assets/gold-slide-6.jpg";
import goldSlide7 from "@/assets/gold-slide-7.jpg";
import goldSlide8 from "@/assets/gold-slide-8.jpg";
import goldSlide9 from "@/assets/gold-slide-9.jpg";
import goldSlide10 from "@/assets/gold-slide-10.jpg";
import eliteSlide1 from "@/assets/elite-slide-1.jpg";
import eliteSlide2 from "@/assets/elite-slide-2.jpg";
import eliteSlide3 from "@/assets/elite-slide-3.jpg";
import eliteSlide4 from "@/assets/elite-slide-4.jpg";
import eliteSlide5 from "@/assets/elite-slide-5.jpg";
import eliteSlide6 from "@/assets/elite-slide-6.jpg";
import eliteSlide7 from "@/assets/elite-slide-7.jpg";
import eliteSlide8 from "@/assets/elite-slide-8.jpg";
import eliteSlide9 from "@/assets/elite-slide-9.jpg";

export default function GallerySection() {
  const galleries = {
    awfis: [
      { id: 1, image: awfisSlide1, alt: "Awfis workspace image 1" },
      { id: 2, image: awfisSlide2, alt: "Awfis workspace image 2" },
      { id: 3, image: awfisSlide3, alt: "Awfis workspace image 3" },
      { id: 4, image: awfisSlide4, alt: "Awfis workspace image 4" },
      { id: 5, image: awfisSlide5, alt: "Awfis workspace image 5" },
      { id: 6, image: awfisSlide6, alt: "Awfis workspace image 6" },
      { id: 7, image: awfisSlide7, alt: "Awfis workspace image 7" },
    ],
    gold: [
      { id: 8, image: goldSlide1, alt: "Awfis Gold Reception Area" },
      { id: 9, image: goldSlide2, alt: "Awfis Gold Marble Entrance" },
      { id: 10, image: goldSlide3, alt: "Awfis Gold Premium Lounge" },
      { id: 11, image: goldSlide4, alt: "Awfis Gold Geometric Workspace" },
      { id: 12, image: goldSlide5, alt: "Awfis Gold Executive Boardroom" },
      { id: 13, image: goldSlide6, alt: "Awfis Gold Private Meeting Room" },
      { id: 14, image: goldSlide7, alt: "Awfis Gold Professional Workspace" },
      { id: 15, image: goldSlide8, alt: "Awfis Gold Open Workspace" },
      { id: 16, image: goldSlide9, alt: "Awfis Gold Dining Area" },
      { id: 17, image: goldSlide10, alt: "Awfis Gold Communal Dining" },
    ],
    elite: [
      { id: 18, image: eliteSlide1, alt: "Elite by Awfis Reception and Welcome Area" },
      { id: 19, image: eliteSlide2, alt: "Elite by Awfis Premium Lounge" },
      { id: 20, image: eliteSlide3, alt: "Elite by Awfis Pod Workspaces" },
      { id: 21, image: eliteSlide4, alt: "Elite by Awfis Executive Lounge" },
      { id: 22, image: eliteSlide5, alt: "Elite by Awfis Modern Workspace" },
      { id: 23, image: eliteSlide6, alt: "Elite by Awfis Executive Boardroom" },
      { id: 24, image: eliteSlide7, alt: "Elite by Awfis Cafe and Dining" },
      { id: 25, image: eliteSlide8, alt: "Elite by Awfis Open Dining Space" },
      { id: 26, image: eliteSlide9, alt: "Elite by Awfis Conference Room" },
    ],
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore Our Workspace Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect workspace that matches your style and productivity needs
          </p>
        </div>

        <Tabs defaultValue="awfis" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="awfis" className="text-sm font-medium">
              Awfis
            </TabsTrigger>
            <TabsTrigger value="gold" className="text-sm font-medium">
              Awfis Gold
            </TabsTrigger>
            <TabsTrigger value="elite" className="text-sm font-medium">
              Elite by Awfis
            </TabsTrigger>
          </TabsList>

          {Object.entries(galleries).map(([key, images]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Carousel 
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {images.map((item, index) => (
                    <CarouselItem 
                      key={item.id} 
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <Card 
                        className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}