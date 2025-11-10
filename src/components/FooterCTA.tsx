import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Professional Journey
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            From ready-to-move-in offices to on-demand workspaces, Awfis is built for leaders like you. 
            Host client presentations, team meetings, or dive into focused work — all with flexible booking options by the hour, day, or longer.
          </p>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="py-6 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © Awfis Space Solutions Limited
          </p>
        </div>
      </div>
    </section>
  );
}